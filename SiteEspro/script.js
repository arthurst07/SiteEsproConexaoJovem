/* =========================================================
   CONEXÃO JOVEM - script principal (index.html)
   Os dados (notícias, usuários, setores) ficam em dados.js
   ========================================================= */

/* Escapa texto antes de colocar em HTML (evita injeção de código) */
function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* Remove acentos e põe em minúsculas, para a busca ignorar "é" x "e" */
function normalizar(texto) {
    return String(texto).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/* Armazenamento seguro: recebe o NOME do storage ("localStorage" ou
   "sessionStorage"), porque alguns navegadores (modo privado, bloqueio de
   cookies) lançam erro até ao acessar o objeto. */
const armazenamento = {
    ler(nome, chave) {
        try { return JSON.parse(window[nome].getItem(chave)); } catch (e) { return null; }
    },
    gravar(nome, chave, valor) {
        try { window[nome].setItem(chave, JSON.stringify(valor)); return true; } catch (e) { return false; }
    },
    remover(nome, chave) {
        try { window[nome].removeItem(chave); } catch (e) { /* ignora */ }
    }
};

const GRADIENTES = {
    blue:   "linear-gradient(45deg, #1d7dbc, #ffca76)",
    pink:   "linear-gradient(45deg, #f94b76, #ff9f5a)",
    orange: "linear-gradient(45deg, #ff9f5a, #f94b76)"
};

document.addEventListener("DOMContentLoaded", () => {
    const $ = id => document.getElementById(id);
    let noticias = CJ.publicadas();
    $("storage-warning").textContent = CJ.erro;
    $("demo-accounts-list").innerHTML = Object.entries(USUARIOS).map(([email,u]) => `<li><strong>${escapeHTML(SETORES[u.setor].titulo)}</strong><br>${escapeHTML(email)} · Senha: <code>${escapeHTML(u.senha)}</code></li>`).join("");

    // =========================================================
    // 1. DATA ATUAL
    // =========================================================
    const dateElement = $("current-date");
    if (dateElement) {
        const texto = new Date().toLocaleDateString("pt-BR", {
            weekday: "long", year: "numeric", month: "long", day: "numeric"
        });
        dateElement.textContent = texto.replace(/^./, c => c.toUpperCase());
    }


    // =========================================================
    // 2. MODAIS (notícias e institucional)
    // =========================================================
    const modal = $("news-modal");
    const modalBody = $("modal-body-content");
    const closeModalBtn = document.querySelector(".close-modal");
    const intranetModal = $("intranet-modal");
    const closeIntranetBtn = document.querySelector(".close-intranet");
    let ultimoFoco = null;

    function abrirJanela(el) {
        if (el.style.display !== "flex") ultimoFoco = document.activeElement;
        el.style.display = "flex";
        el.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function fecharJanela(el) {
        if (!el || el.style.display !== "flex") return;
        el.style.display = "none";
        el.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
        if (ultimoFoco && ultimoFoco.focus) ultimoFoco.focus();
    }

    /* titulo: texto simples | conteudoHTML: HTML já confiável/escapado */
    function openModal(titulo, conteudoHTML) {
        modalBody.innerHTML = `<div class="modal-body"><h2>${escapeHTML(titulo)}</h2>${conteudoHTML}</div>`;
        modal.querySelector(".modal-content").scrollTop = 0;
        abrirJanela(modal);
    }

    function abrirNoticia(id) {
        const n = noticias.find(item => String(item.id) === String(id));
        if (!n) return;
        const relacionadas = noticias.filter(x => x.cat === n.cat && x.id !== n.id).slice(0, 2);
        const maisHTML = relacionadas.length
            ? `<div class="related"><h4>Leia também</h4>${relacionadas.map(r =>
                `<a href="#" class="related-link news-trigger" data-id="${r.id}">${escapeHTML(r.titulo)}</a>`).join("")}</div>`
            : "";
        openModal(n.titulo, `
            <span class="badge">${escapeHTML(n.label)}</span>
            <p class="article-meta">Por ${escapeHTML(n.autor)} • ${escapeHTML(n.tempo)}</p>
            ${n.texto.map(p => `<p>${escapeHTML(p)}</p>`).join("")}
            ${n.fontes.length ? `<h3>Fontes e referências</h3><ul class="article-sources">${n.fontes.map(f=>`<li><a href="${escapeHTML(f.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(f.nome)}</a></li>`).join("")}</ul>` : `<p class="dica">Texto demonstrativo da edição escolar.</p>`}
            ${maisHTML}
        `);
    }

    closeModalBtn.addEventListener("click", () => fecharJanela(modal));
    closeIntranetBtn.addEventListener("click", () => fecharJanela(intranetModal));
    [closeModalBtn, closeIntranetBtn].forEach(btn => {
        btn.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); btn.click(); }
        });
    });

    window.addEventListener("click", e => {
        if (e.target === modal) fecharJanela(modal);
        if (e.target === intranetModal) fecharJanela(intranetModal);
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            fecharJanela(modal);
            fecharJanela(intranetModal);
        }
    });

    /* Clique (ou Enter) em qualquer item .news-trigger abre a matéria.
       Delegação de eventos: funciona também para itens criados depois. */
    document.addEventListener("click", e => {
        const gatilho = e.target.closest(".news-trigger");
        if (!gatilho) return;
        e.preventDefault();
        abrirNoticia(gatilho.getAttribute("data-id"));
    });
    document.addEventListener("keydown", e => {
        if (e.key !== "Enter" && e.key !== " ") return;
        const gatilho = e.target.closest && e.target.closest(".news-trigger");
        if (gatilho && gatilho.tagName !== "A") { e.preventDefault(); abrirNoticia(gatilho.getAttribute("data-id")); }
    });


    // =========================================================
    // 3. MONTAGEM DA HOME E DAS CATEGORIAS
    // =========================================================
    const heroSection = $("hero-section");
    const newsGrid = $("news-grid");
    const sectionTitle = $("section-title");
    const emptyMsg = $("empty-msg");
    const clearFilterBtn = $("clear-filter");
    let IDS_DESTAQUE = [];

    let categoriaAtual = "home";
    let termoBusca = "";

    function montarDestaque() {
        noticias = CJ.publicadas();
        const selecionadas = noticias.filter(n => n.destaque).slice(0,4);
        IDS_DESTAQUE = selecionadas.map(n => n.id);
        if (!selecionadas.length) { heroSection.innerHTML = ''; return; }
        const [principal, ...laterais] = selecionadas;
        heroSection.innerHTML = `
            <div class="hero-main news-trigger" data-id="${principal.id}" tabindex="0" role="button">
                <div class="badge">EM DESTAQUE • ${escapeHTML(principal.label)}</div>
                <h2>${escapeHTML(principal.titulo)}</h2>
                <p>${escapeHTML(principal.resumo)}</p>
                <span class="author">Por ${escapeHTML(principal.autor)} • ${escapeHTML(principal.tempo)}</span>
            </div>
            <div class="hero-sidebar">
                ${laterais.map(n => `
                    <div class="side-news news-trigger" data-id="${n.id}" tabindex="0" role="button">
                        <span class="badge-sm ${n.cor}">${escapeHTML(n.label)}</span>
                        <h4>${escapeHTML(n.titulo)}</h4>
                    </div>`).join("")}
            </div>`;
    }

    function cartaoHTML(n) {
        return `
            <article class="news-card news-trigger" data-id="${n.id}" tabindex="0" role="button">
                <div class="card-img" style="background: ${n.grad || GRADIENTES[n.cor]};">
                    <i class="fas ${n.icone}"></i>
                </div>
                <div class="card-content">
                    <span class="badge-sm ${n.cor}">${escapeHTML(n.label)}</span>
                    <h4>${escapeHTML(n.titulo)}</h4>
                    <p>${escapeHTML(n.resumo)}</p>
                    <span class="article-meta">${escapeHTML(n.tempo)}</span>
                </div>
            </article>`;
    }

    function atualizarMenuAtivo() {
        document.querySelectorAll(".nav-btn").forEach(btn => {
            const ativo = !termoBusca && btn.getAttribute("data-page") === categoriaAtual;
            btn.classList.toggle("active", ativo);
        });
    }

    function renderizar() {
        let lista;
        let titulo;
        const emBusca = termoBusca !== "";
        const naHome = !emBusca && categoriaAtual === "home";

        if (emBusca) {
            const palavras = normalizar(termoBusca).split(/\s+/).filter(Boolean);
            lista = noticias.filter(n => {
                const palheiro = normalizar([n.titulo, n.resumo, n.label, n.texto.join(" ")].join(" "));
                return palavras.every(p => palheiro.includes(p));
            });
            titulo = `Resultados para "${termoBusca}" (${lista.length})`;
        } else if (naHome) {
            lista = noticias.filter(n => !IDS_DESTAQUE.includes(n.id));
            titulo = "Últimas do Rolê";
        } else {
            lista = noticias.filter(n => n.cat === categoriaAtual);
            titulo = `Notícias sobre: ${CATEGORIAS[categoriaAtual].nome}`;
        }

        heroSection.classList.toggle("hidden", !naHome || !IDS_DESTAQUE.length);
        sectionTitle.textContent = titulo;          // textContent: seguro contra injeção
        newsGrid.innerHTML = lista.map(cartaoHTML).join("");
        emptyMsg.classList.toggle("hidden", lista.length > 0);
        clearFilterBtn.classList.toggle("hidden", !emBusca);
        atualizarMenuAtivo();
    }

    montarDestaque();
    renderizar();
    window.addEventListener("storage", e => { if (e.key === "cj_editorial_v1") { montarDestaque(); renderizar(); $("storage-warning").textContent = CJ.erro; fecharJanela(modal); } });
    window.addEventListener("focus", () => { montarDestaque(); renderizar(); });


    // =========================================================
    // 4. NAVEGAÇÃO POR CATEGORIAS + MENU MOBILE
    // =========================================================
    const menuToggle = $("menu-toggle");
    const navLinks = $("nav-links");

    document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", e => {
            e.preventDefault();
            const page = button.getAttribute("data-page");
            if (!Object.hasOwn(CATEGORIAS, page)) return;
            categoriaAtual = page;
            termoBusca = "";
            $("search-input").value = "";
            renderizar();
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            if (button.closest("footer")) {
                document.querySelector(".news-grid-section").scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    menuToggle.addEventListener("click", () => {
        const aberto = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(aberto));
    });


    // =========================================================
    // 5. BUSCA
    // =========================================================
    const searchInput = $("search-input");
    const searchBtn = $("search-btn");

    function executeSearch() {
        const consulta = searchInput.value.trim();
        if (consulta === "" && termoBusca === "") return;
        termoBusca = consulta;
        menuToggle.setAttribute("aria-expanded", "false");
        if (consulta === "") categoriaAtual = "home";
        renderizar();
        navLinks.classList.remove("open");
        document.querySelector(".news-grid-section").scrollIntoView({ behavior: "smooth" });
    }

    searchBtn.addEventListener("click", executeSearch);
    searchInput.addEventListener("keydown", e => { if (e.key === "Enter") executeSearch(); });

    clearFilterBtn.addEventListener("click", () => {
        termoBusca = "";
        categoriaAtual = "home";
        searchInput.value = "";
        renderizar();
    });


    // =========================================================
    // 6. PRODUTOS E NEWSLETTER
    // =========================================================
    $("products-grid").innerHTML = PRODUTOS.map(p => `
        <div class="product-card">
            <div class="product-icon"><i class="fas ${p.icone}"></i></div>
            <h4>${escapeHTML(p.nome)}</h4>
            <p>${escapeHTML(p.desc)}</p>
        </div>`).join("");

    $("weekly-btn").addEventListener("click", () => {
        const atuais = CJ.publicadas().slice(0,5);
        openModal("Conexão Weekly · Edição para leitura", `<p>Uma seleção do acervo publicado. Sem cadastro ou envio por e-mail.</p>${atuais.length ? atuais.map(n=>`<section class="weekly-item"><h3><a href="#" class="news-trigger" data-id="${n.id}">${escapeHTML(n.titulo)}</a></h3><p>${escapeHTML(n.resumo)}</p></section>`).join('') : '<p>A redação está preparando a próxima edição.</p>'}`);
    });

    // =========================================================
    // 7. PÁGINAS INSTITUCIONAIS (rodapé)
    // =========================================================
    document.querySelectorAll(".footer-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const info = INSTITUCIONAL[link.getAttribute("data-info")];
            if (info) openModal(info.titulo, info.html);
        });
    });


    // =========================================================
    // 8. INTRANET (login por e-mail, painel por setor)
    // =========================================================
    const intranetBtn = $("intranet-access-btn");
    const loginView = $("intranet-login-view");
    const dashboardView = $("intranet-dashboard-view");
    const loginForm = $("intranet-login-form");
    const loginError = $("login-error");
    const logoutBtn = $("logout-btn");
    const userEmailDisplay = $("user-email-display");
    const userSectorTitle = $("user-sector-title");
    const sectorContent = $("sector-dashboard-content");
    const sectorLink = $("sector-page-link");
    const muralList = $("mural-list");
    const CHAVE_SESSAO = "cj_sessao";

    muralList.innerHTML = MURAL_AVISOS.map(a => `<li>${a}</li>`).join("");

    function mostrarPainel(sessao) {
        const setor = SETORES[sessao.setor];
        userEmailDisplay.textContent = sessao.email;
        userSectorTitle.textContent = setor.titulo;
        sectorContent.innerHTML = `
            <h3><i class="fas ${setor.icone}"></i> ${escapeHTML(setor.titulo)}</h3>
            <p class="sector-mission">${escapeHTML(setor.missao)}</p>
            <div class="kpi-grid">
                ${setor.kpis.map(k => `
                    <div class="kpi">
                        <strong>${escapeHTML(k.valor)}</strong>
                        <span>${escapeHTML(k.rotulo)}</span>
                    </div>`).join("")}
            </div>`;
        sectorLink.setAttribute("href", `paginas/${sessao.setor}.html`);
        loginView.classList.add("hidden");
        dashboardView.classList.remove("hidden");
    }

    function mostrarLogin() {
        dashboardView.classList.add("hidden");
        loginView.classList.remove("hidden");
        userEmailDisplay.textContent = "";
        userSectorTitle.textContent = "";
        sectorContent.innerHTML = "";
        loginError.classList.add("hidden");
        loginForm.reset();
    }

    function abrirIntranet() {
        const sessao = armazenamento.ler("sessionStorage", CHAVE_SESSAO);
        if (sessao && CJ.sessao()) {
            mostrarPainel(sessao);
        } else {
            mostrarLogin();
        }
        abrirJanela(intranetModal);

    }

    intranetBtn.addEventListener("click", abrirIntranet);

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const email = $("employee-email").value.trim().toLowerCase();
        const senha = $("employee-pass").value;
        const existe = Object.prototype.hasOwnProperty.call(USUARIOS, email);

        if (!existe || USUARIOS[email].senha !== senha || !SETORES[USUARIOS[email].setor]) {
            loginError.textContent = "Credenciais inválidas. Tente novamente.";
            loginError.classList.remove("hidden");
            return;
        }

        const sessao = { email, setor: USUARIOS[email].setor };
        if (!armazenamento.gravar("sessionStorage", CHAVE_SESSAO, sessao)) {
            loginError.textContent = "Habilite o armazenamento de sessão no navegador para entrar.";
            loginError.classList.remove("hidden"); return;
        }
        loginError.classList.add("hidden");
        loginForm.reset();
        mostrarPainel(sessao);
    });

    [$("employee-email"), $("employee-pass")].forEach(campo => {
        campo.addEventListener("input", () => loginError.classList.add("hidden"));
    });

    logoutBtn.addEventListener("click", () => {
        armazenamento.remover("sessionStorage", CHAVE_SESSAO);
        mostrarLogin();
    });
});
