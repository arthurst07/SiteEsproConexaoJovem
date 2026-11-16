/* =========================================================
   PÁGINA DE SETOR (paginas/ti.html, rh.html, ...)
   Cada página define <body data-setor="..."> e este script
   monta o conteúdo com os dados de ../dados.js.
   Só entra quem fez login na intranet (a Gestão vê todos).
   ========================================================= */
(function () {
    const CHAVE_SESSAO = "cj_sessao";
    const $ = id => document.getElementById(id);

    function esc(v) {
        return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    function lerSessao() {
        try { return JSON.parse(sessionStorage.getItem(CHAVE_SESSAO)); } catch (e) { return null; }
    }

    function classeStatus(status) {
        const s = status.toLowerCase();
        if (/(conclu|no ar|aprovad|entregue)/.test(s)) return "ok";
        if (/(andamento|teste|produ|edi|negocia|agendad)/.test(s)) return "andamento";
        return "planejado";
    }

    const setorId = document.body.getAttribute("data-setor");
    const setor = SETORES[setorId];
    const main = $("setor-main");
    const sessao = CJ.sessao();

    /* ---- Acesso negado ---- */
    const podeVer = sessao && SETORES[sessao.setor] && (sessao.setor === setorId || sessao.setor === "gestao");
    if (!setor || !podeVer) {
        main.innerHTML = `
            <div class="acesso-negado">
                <i class="fas fa-lock"></i>
                <h2>Acesso restrito</h2>
                <p>${sessao ? "Seu usuário não tem permissão para ver este setor." : "Entre pela Área do Funcionário para ver esta página."}</p>
                <a class="login-submit-btn" href="../index.html">Voltar ao portal</a>
            </div>`;
        return;
    }

    /* ---- Cabeçalho com usuário e sair ---- */
    $("usuario-logado").textContent = sessao.email;
    $("sair-btn").addEventListener("click", () => {
        try { sessionStorage.removeItem(CHAVE_SESSAO); } catch (e) { /* ignora */ }
        window.location.href = "../index.html";
    });

    /* ---- Navegação entre setores (só Gestão) ---- */
    let navSetores = "";
    if (sessao.setor === "gestao") {
        navSetores = `<nav class="setor-nav" aria-label="Setores">` +
            Object.keys(SETORES).map(id =>
                `<a href="${id}.html" class="${id === setorId ? "ativo" : ""}">${esc(SETORES[id].titulo)}</a>`).join("") +
            `</nav>`;
    }

    /* ---- Tarefas (marcadas ficam salvas neste navegador) ---- */
    const chaveTarefas = "cj_tarefas_" + setorId;
    function lerTarefas() {
        try { return JSON.parse(localStorage.getItem(chaveTarefas)) || []; } catch (e) { return []; }
    }
    function gravarTarefas(lista) {
        try { localStorage.setItem(chaveTarefas, JSON.stringify(lista)); } catch (e) { /* ignora */ }
    }

    function moeda(v) {
        return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    }

    function orgHTML(no) {
        const filhos = (no.filhos || []).map(f => `<li><div class="org-no">${esc(f.nome)}</div></li>`).join("");
        return `<div class="org"><div class="org-no org-raiz">${esc(no.nome)}</div>` +
            (filhos ? `<ul class="org-filhos">${filhos}</ul>` : "") + `</div>`;
    }

    /* Missão, visão, valores, organograma, SWOT, cronograma e orçamento */
    function gestaoExtras() {
        const e = EMPRESA;
        const totalDesp = e.orcamento.despesas.reduce((t, d) => t + d.valor, 0);
        const saldo = e.orcamento.receita - totalDesp;
        const sw = e.swot;
        const quad = (titulo, classe, lista) =>
            `<div class="swot-q ${classe}"><h4>${titulo}</h4><ul>${lista.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`;

        return `
        <section class="blocos-grid">
            <div class="painel-card">
                <h3>Missão</h3><p>${esc(e.missao)}</p>
                <h3 class="sub">Visão</h3><p>${esc(e.visao)}</p>
            </div>
            <div class="painel-card">
                <h3>Valores</h3>
                <ul>${e.valores.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
            </div>
        </section>

        <section class="painel-card">
            <h3>Organograma</h3>
            ${orgHTML(e.organograma)}
        </section>

        <section class="painel-card">
            <h3>Análise SWOT</h3>
            <div class="swot">
                ${quad("Forças", "f", sw.forcas)}
                ${quad("Fraquezas", "w", sw.fraquezas)}
                ${quad("Oportunidades", "o", sw.oportunidades)}
                ${quad("Ameaças", "t", sw.ameacas)}
            </div>
        </section>

        <section class="blocos-grid">
            <div class="painel-card">
                <h3>Cronograma</h3>
                <ol class="linha-tempo">
                    ${e.cronograma.map(c => `<li><strong>${esc(c.periodo)}</strong><span>${esc(c.marco)}</span></li>`).join("")}
                </ol>
            </div>
            <div class="painel-card">
                <h3>Orçamento mensal</h3>
                <div class="tabela-wrap">
                    <table class="tabela">
                        <thead><tr><th>Item</th><th>Valor</th><th>% da receita</th></tr></thead>
                        <tbody>
                            ${e.orcamento.despesas.map(d => `
                                <tr><td>${esc(d.item)}</td><td>${moeda(d.valor)}</td>
                                <td>${(d.valor / e.orcamento.receita * 100).toFixed(1).replace(".", ",")}%</td></tr>`).join("")}
                            <tr class="total"><td>${esc(e.orcamento.rotuloReceita)}</td><td colspan="2">${moeda(e.orcamento.receita)}</td></tr>
                            <tr class="total"><td>Total de despesas</td><td colspan="2">${moeda(totalDesp)}</td></tr>
                            <tr class="total"><td>Saldo previsto</td><td colspan="2" class="${saldo >= 0 ? "pos" : "neg"}">${moeda(saldo)}</td></tr>
                            <tr class="total"><td>Custo por integrante (${INTEGRANTES})</td><td colspan="2">${moeda(totalDesp / INTEGRANTES)}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>`;
    }

    document.title = setor.titulo + " | Conexão Jovem";

    main.innerHTML = `
        ${navSetores}
        <section class="setor-topo">
            <h2><i class="fas ${setor.icone}"></i> ${esc(setor.titulo)}</h2>
            <p>${esc(setor.missao)}</p>
        </section>

        <section class="kpi-grid kpi-grande">
            ${setor.kpis.map(k => `<div class="kpi"><strong>${esc(k.valor)}</strong><span>${esc(k.rotulo)}</span></div>`).join("")}
        </section>

        <section class="painel-card">
            <h3>Entregas e projetos</h3>
            <div class="tabela-wrap">
                <table class="tabela">
                    <thead><tr><th>Projeto</th><th>Status</th><th>Prazo</th></tr></thead>
                    <tbody>
                        ${setor.entregas.map(e => `
                            <tr>
                                <td>${esc(e.nome)}</td>
                                <td><span class="status ${classeStatus(e.status)}">${esc(e.status)}</span></td>
                                <td>${esc(e.prazo)}</td>
                            </tr>`).join("")}
                    </tbody>
                </table>
            </div>
        </section>

        <section class="blocos-grid">
            ${setor.blocos.map(b => `
                <div class="painel-card">
                    <h3>${esc(b.titulo)}</h3>
                    <ul>${b.itens.map(i => `<li>${i}</li>`).join("")}</ul>
                </div>`).join("")}
        </section>

        ${setorId === "gestao" ? gestaoExtras() : ""}

        <section class="painel-card">
            <h3>Checklist do setor</h3>
            <p class="dica">Suas marcações ficam salvas neste navegador.</p>
            <ul class="checklist" id="checklist"></ul>
        </section>`;

    const checklist = $("checklist");
    function desenharChecklist() {
        const feitas = lerTarefas();
        checklist.innerHTML = setor.tarefas.map((t, i) => `
            <li>
                <label>
                    <input type="checkbox" data-i="${i}" ${feitas.includes(i) ? "checked" : ""}>
                    <span>${esc(t)}</span>
                </label>
            </li>`).join("");
    }
    checklist.addEventListener("change", e => {
        const box = e.target;
        if (!box.matches("input[type=checkbox]")) return;
        const i = Number(box.getAttribute("data-i"));
        let feitas = lerTarefas();
        feitas = box.checked ? feitas.concat(i) : feitas.filter(x => x !== i);
        gravarTarefas(Array.from(new Set(feitas)));
    });
    desenharChecklist();
})();
