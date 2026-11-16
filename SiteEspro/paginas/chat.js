/* =========================================================
   CHAT DA EQUIPE (só para quem fez login na intranet)
   Mensagens do tipo Tarefa, Dúvida ou Aviso.
   - Modo teste (padrão): salva no próprio navegador.
   - Modo compartilhado: Firebase Realtime Database (CHAT.md).
   ========================================================= */
(function () {
    const CHAVE_SESSAO = "cj_sessao";
    const CHAVE_LOCAL = "cj_chat";
    const CHAVE_NOME = "cj_chat_nome";
    const INTERVALO = 4000;
    const $ = id => document.getElementById(id);

    function esc(v) {
        return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
    function lerJSON(storage, chave, padrao) {
        try { const v = JSON.parse(window[storage].getItem(chave)); return v == null ? padrao : v; } catch (e) { return padrao; }
    }
    function gravarJSON(storage, chave, valor) {
        try { window[storage].setItem(chave, JSON.stringify(valor)); return true; } catch (e) { return false; }
    }

    const main = $("chat-main");
    const sessao = lerJSON("sessionStorage", CHAVE_SESSAO, null);

    /* ---- Só funcionários ---- */
    if (!sessao || !SETORES[sessao.setor]) {
        main.innerHTML = `
            <div class="acesso-negado">
                <i class="fas fa-lock"></i>
                <h2>Acesso restrito</h2>
                <p>O chat é só para funcionários. Entre pela Área do Funcionário no portal.</p>
                <a class="login-submit-btn" href="../index.html">Voltar ao portal</a>
            </div>`;
        return;
    }

    $("usuario-logado").textContent = sessao.email;
    $("meu-setor").setAttribute("href", sessao.setor + ".html");
    $("sair-btn").addEventListener("click", () => {
        try { sessionStorage.removeItem(CHAVE_SESSAO); } catch (e) { /* ignora */ }
        window.location.href = "../index.html";
    });

    /* =====================================================
       BACKENDS
       ===================================================== */
    const urlFirebase = (CHAT_CONFIG.firebaseUrl || "").trim().replace(/\/+$/, "");
    const compartilhado = urlFirebase !== "";

    const backendLocal = {
        listar() {
            return Promise.resolve(lerJSON("localStorage", CHAVE_LOCAL, []).slice(-200));
        },
        enviar(msg) {
            const lista = lerJSON("localStorage", CHAVE_LOCAL, []);
            msg.id = "m" + Date.now() + Math.random().toString(36).slice(2, 7);
            lista.push(msg);
            gravarJSON("localStorage", CHAVE_LOCAL, lista.slice(-200));
            return Promise.resolve();
        },
        atualizar(id, patch) {
            const lista = lerJSON("localStorage", CHAVE_LOCAL, []);
            const m = lista.find(x => x.id === id);
            if (m) Object.assign(m, patch);
            gravarJSON("localStorage", CHAVE_LOCAL, lista);
            return Promise.resolve();
        },
        apagar(id) {
            const lista = lerJSON("localStorage", CHAVE_LOCAL, []).filter(x => x.id !== id);
            gravarJSON("localStorage", CHAVE_LOCAL, lista);
            return Promise.resolve();
        }
    };

    function checar(resp) {
        if (!resp.ok) throw new Error("HTTP " + resp.status);
        return resp.json();
    }

    const backendFirebase = {
        listar() {
            const q = "?orderBy=" + encodeURIComponent('"$key"') + "&limitToLast=100";
            return fetch(urlFirebase + "/chat.json" + q).then(checar).then(obj => {
                const lista = Object.keys(obj || {}).map(k => Object.assign({ id: k }, obj[k]));
                return lista.sort((a, b) => (a.ts || 0) - (b.ts || 0));
            });
        },
        enviar(msg) {
            return fetch(urlFirebase + "/chat.json", {
                method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(msg)
            }).then(checar);
        },
        atualizar(id, patch) {
            return fetch(urlFirebase + "/chat/" + encodeURIComponent(id) + ".json", {
                method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch)
            }).then(checar);
        },
        apagar(id) {
            return fetch(urlFirebase + "/chat/" + encodeURIComponent(id) + ".json", { method: "DELETE" }).then(checar);
        }
    };

    const backend = compartilhado ? backendFirebase : backendLocal;

    /* =====================================================
       INTERFACE
       ===================================================== */
    const TIPOS = {
        tarefa: { rotulo: "Tarefa", icone: "fa-list-check", classe: "tarefa" },
        duvida: { rotulo: "Dúvida", icone: "fa-circle-question", classe: "duvida" },
        aviso:  { rotulo: "Aviso",  icone: "fa-bullhorn", classe: "aviso" }
    };

    main.innerHTML = `
        <section class="chat">
            <div class="chat-topo">
                <h2><i class="fas fa-comments"></i> Chat da equipe</h2>
                <span class="chat-modo ${compartilhado ? "online" : "teste"}" id="chat-modo">
                    ${compartilhado ? "Chat compartilhado (online)" : "Modo teste (mensagens só neste navegador)"}
                </span>
            </div>
            ${compartilhado ? "" : `<p class="chat-dica">Para a turma conversar de verdade em aparelhos diferentes, configure o chat online (veja <strong>CHAT.md</strong>).</p>`}
            <div class="chat-abas" id="chat-abas" role="tablist">
                <button type="button" class="ativo" data-filtro="todas">Todas</button>
                <button type="button" data-filtro="tarefa">Tarefas</button>
                <button type="button" data-filtro="duvida">Dúvidas</button>
                <button type="button" data-filtro="aviso">Avisos</button>
                <button type="button" data-filtro="abertas">Só pendentes</button>
            </div>
            <ul class="chat-lista" id="chat-lista" aria-live="polite"></ul>
            <p class="chat-erro hidden" id="chat-erro" role="alert"></p>
            <form class="chat-form" id="chat-form" novalidate>
                <div class="chat-linha">
                    <input type="text" id="chat-nome" placeholder="Seu nome" maxlength="30" aria-label="Seu nome" required>
                    <select id="chat-tipo" aria-label="Tipo da mensagem">
                        <option value="tarefa">Tarefa</option>
                        <option value="duvida">Dúvida</option>
                        <option value="aviso">Aviso</option>
                    </select>
                </div>
                <textarea id="chat-texto" rows="2" maxlength="500" placeholder="Escreva sua tarefa, dúvida ou aviso..." aria-label="Mensagem" required></textarea>
                <div class="chat-linha chat-rodape">
                    <span class="chat-contador" id="chat-contador">0 / 500</span>
                    <button type="submit" class="login-submit-btn chat-enviar"><i class="fas fa-paper-plane"></i> Enviar</button>
                </div>
            </form>
        </section>`;

    const lista = $("chat-lista");
    const erro = $("chat-erro");
    const form = $("chat-form");
    const campoNome = $("chat-nome");
    const campoTipo = $("chat-tipo");
    const campoTexto = $("chat-texto");
    let mensagens = [];
    let filtro = "todas";
    let ultimoResumo = "";

    campoNome.value = lerJSON("localStorage", CHAVE_NOME, "");

    function mostrarErro(txt) {
        erro.textContent = txt || "";
        erro.classList.toggle("hidden", !txt);
    }

    function formatarHora(ts) {
        try {
            return new Date(ts).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
        } catch (e) { return ""; }
    }

    function pertence(m) {
        if (filtro === "todas") return true;
        if (filtro === "abertas") return m.tipo !== "aviso" && m.status !== "resolvida";
        return m.tipo === filtro;
    }

    function podeApagar(m) {
        return m.dono === sessao.email || sessao.setor === "gestao";
    }

    function desenhar() {
        const visiveis = mensagens.filter(pertence);
        if (!visiveis.length) {
            lista.innerHTML = `<li class="chat-vazio">Nenhuma mensagem por aqui ainda. Publique a primeira!</li>`;
            return;
        }
        lista.innerHTML = visiveis.map(m => {
            const t = TIPOS[m.tipo] || TIPOS.aviso;
            const feita = m.status === "resolvida";
            const nomeSetor = SETORES[m.setor] ? SETORES[m.setor].titulo.split(" (")[0].split(" &")[0] : "";
            const acaoRotulo = m.tipo === "duvida" ? (feita ? "Reabrir dúvida" : "Marcar como respondida")
                                                    : (feita ? "Reabrir tarefa" : "Marcar como concluída");
            return `
            <li class="chat-msg ${t.classe} ${feita ? "feita" : ""}" data-id="${esc(m.id)}">
                <div class="chat-msg-topo">
                    <span class="chat-tipo ${t.classe}"><i class="fas ${t.icone}"></i> ${t.rotulo}</span>
                    <strong>${esc(m.autor)}</strong>
                    <span class="chat-setor">${esc(nomeSetor)}</span>
                    <span class="chat-hora">${esc(formatarHora(m.ts))}</span>
                    ${feita ? `<span class="chat-ok"><i class="fas fa-check"></i> ${m.tipo === "duvida" ? "Respondida" : "Concluída"}</span>` : ""}
                </div>
                <p class="chat-texto">${esc(m.texto)}</p>
                <div class="chat-acoes">
                    ${m.tipo !== "aviso" ? `<button type="button" data-acao="alternar">${acaoRotulo}</button>` : ""}
                    ${podeApagar(m) ? `<button type="button" data-acao="apagar" class="perigo">Apagar</button>` : ""}
                </div>
            </li>`;
        }).join("");
    }

    function atualizar(forcar) {
        return backend.listar().then(lst => {
            const resumo = JSON.stringify(lst);
            if (!forcar && resumo === ultimoResumo) return;
            ultimoResumo = resumo;
            const rolagem = lista.scrollHeight - lista.scrollTop - lista.clientHeight < 80;
            mensagens = lst;
            desenhar();
            if (rolagem || forcar) lista.scrollTop = lista.scrollHeight;
            mostrarErro("");
        }).catch(() => {
            mostrarErro("Não foi possível falar com o chat online agora. Confira a internet e a configuração (CHAT.md).");
        });
    }

    /* ---- Enviar ---- */
    campoTexto.addEventListener("input", () => {
        $("chat-contador").textContent = campoTexto.value.length + " / 500";
    });
    campoTexto.addEventListener("keydown", e => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true })); }
    });

    form.addEventListener("submit", e => {
        e.preventDefault();
        const nome = campoNome.value.trim().slice(0, 30);
        const texto = campoTexto.value.trim().slice(0, 500);
        if (!nome) { mostrarErro("Digite seu nome."); campoNome.focus(); return; }
        if (!texto) { mostrarErro("Escreva uma mensagem."); campoTexto.focus(); return; }
        const tipo = TIPOS[campoTipo.value] ? campoTipo.value : "aviso";
        gravarJSON("localStorage", CHAVE_NOME, nome);
        const msg = { autor: nome, setor: sessao.setor, dono: sessao.email, tipo, texto, ts: Date.now(), status: "aberta" };
        mostrarErro("");
        backend.enviar(msg).then(() => {
            campoTexto.value = "";
            $("chat-contador").textContent = "0 / 500";
            return atualizar(true);
        }).catch(() => mostrarErro("Não consegui enviar. Tente de novo."));
    });

    /* ---- Ações em mensagens ---- */
    lista.addEventListener("click", e => {
        const botao = e.target.closest("button[data-acao]");
        if (!botao) return;
        const item = botao.closest(".chat-msg");
        const id = item.getAttribute("data-id");
        const m = mensagens.find(x => String(x.id) === id);
        if (!m) return;
        let promessa;
        if (botao.getAttribute("data-acao") === "alternar") {
            promessa = backend.atualizar(id, { status: m.status === "resolvida" ? "aberta" : "resolvida" });
        } else {
            if (!window.confirm("Apagar esta mensagem?")) return;
            promessa = backend.apagar(id);
        }
        promessa.then(() => atualizar(false)).catch(() => mostrarErro("Não consegui concluir a ação."));
    });

    /* ---- Abas ---- */
    $("chat-abas").addEventListener("click", e => {
        const b = e.target.closest("button[data-filtro]");
        if (!b) return;
        filtro = b.getAttribute("data-filtro");
        document.querySelectorAll("#chat-abas button").forEach(x => x.classList.toggle("ativo", x === b));
        desenhar();
    });

    /* ---- Atualização automática ---- */
    window.addEventListener("storage", e => { if (e.key === CHAVE_LOCAL) atualizar(false); });
    setInterval(() => { if (!document.hidden && compartilhado) atualizar(false); }, INTERVALO);
    atualizar(true);
})();
