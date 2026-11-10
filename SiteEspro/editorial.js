/* Conteúdo local para a apresentação. Não é autenticação de servidor. */
(() => {
    'use strict';
    const CHAVE = 'cj_editorial_v1';
    const status = ['rascunho', 'revisao', 'publicado'];
    const esc = v => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const texto = (v, max) => typeof v === 'string' && v.trim().length > 0 && v.length <= max;
    function validar(n) {
        return n && texto(n.id, 100) && /^[a-zA-Z0-9_-]+$/.test(n.id) &&
            Object.hasOwn(CATEGORIAS, n.cat) && n.cat !== 'home' &&
            texto(n.titulo, 180) && texto(n.resumo, 500) && texto(n.autor, 100) &&
            texto(n.responsavel, 150) && status.includes(n.status) && typeof n.destaque === 'boolean' &&
            Array.isArray(n.texto) && n.texto.length > 0 && n.texto.length <= 100 && n.texto.every(p => texto(p, 12000)) &&
            Array.isArray(n.fontes) && n.fontes.length <= 20 && n.fontes.every(f => texto(f.nome, 150) && /^https?:\/\//.test(f.url) && f.url.length <= 2000 && (()=>{try {const u = new URL(f.url);return !!u.hostname && !u.username && !u.password;}catch{return false;}})()) &&
            texto(n.criadoEm, 50) && Number.isFinite(Date.parse(n.criadoEm)) && texto(n.atualizadoEm, 50) && Number.isFinite(Date.parse(n.atualizadoEm));
    }
    function limpar(n) {return {id:n.id, cat:n.cat,titulo:n.titulo.trim(),resumo:n.resumo.trim(),autor:n.autor.trim(),responsavel:n.responsavel,status:n.status,destaque:n.destaque,texto:n.texto.map(p=>p.trim()),fontes:n.fontes.map(f=>({nome:f.nome.trim(),url:f.url})),criadoEm:n.criadoEm,atualizadoEm:n.atualizadoEm};}
    const iniciais = NOTICIAS.map((n,i) => ({id:String(n.id),cat:n.cat,titulo:n.titulo,resumo:n.resumo,autor:n.autor,responsavel:'redacao',status:'publicado',destaque:i<4,texto:n.texto,fontes:[],criadoEm:'2026-11-09T12:00:00-03:00',atualizadoEm:'2026-11-09T12:00:00-03:00'}));
    let erro = '';
    function ler() {
        try {
            const raw = localStorage.getItem(CHAVE);
            if (raw === null) return iniciais.map(limpar);
            const data = JSON.parse(raw);
            if (!Array.isArray(data) || data.length>500 || !data.every(validar) || new Set(data.map(n=>n.id)).size!==data.length) throw Error();
            erro = ''; return data.map(limpar);
        } catch {erro='Não foi possível ler os dados locais. Nenhuma alteração será salva até resolver o armazenamento ou importar um backup válido.';return iniciais.map(limpar);}
    }
    function gravar(lista, esperado, recuperar=false) {
        if (!recuperar && esperado !== snapshot()) throw Error('O conteúdo foi alterado em outra aba. Recarregue antes de salvar; copie seu texto para não perdê-lo.');
        if (!recuperar && erro) throw Error(erro);
        if (!lista.every(validar) || lista.length>500) throw Error('Conteúdo inválido ou limite de 500 matérias atingido.');
        try {localStorage.setItem(CHAVE,JSON.stringify(lista.map(limpar)));erro='';}
        catch {throw Error('Não foi possível salvar neste navegador. Libere espaço ou habilite o armazenamento. O formulário continua preenchido.');}
        window.dispatchEvent(new Event('cj:atualizado'));
    }
    function snapshot(){try{return localStorage.getItem(CHAVE);}catch {return 'indisponivel';}}
    function sessao(){try{const s=JSON.parse(sessionStorage.getItem('cj_sessao'));return s && USUARIOS[s.email]?.setor === s.setor ? s : null;}catch{return null;}}
    function editor(s){return !!s && ['gestao','producao'].includes(s.setor);}
    function decorar(n) {const cor={musica:'pink',series:'blue',cultura:'orange',games:'pink',moda:'orange'}; const icone={musica:'fa-headphones-alt',series:'fa-film',cultura:'fa-book-open',games:'fa-gamepad',moda:'fa-palette'};return {...n,label:CATEGORIAS[n.cat].nome.toUpperCase(),cor:cor[n.cat],icone:icone[n.cat],tempo:data(n.atualizadoEm)};}
    function data(v){return new Date(v).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});}
    window.CJ={ler,gravar,snapshot,sessao,editor,esc,validar,data,get erro(){return erro;},publicadas:()=>ler().filter(n=>n.status==='publicado').sort((a,b)=>Date.parse(b.atualizadoEm)-Date.parse(a.atualizadoEm)).map(decorar)};
})();
