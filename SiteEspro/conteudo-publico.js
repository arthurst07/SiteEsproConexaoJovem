/* Textos públicos da entrega; separado das contas demonstrativas. */
(() => {
    const textos = {
    "produtos": [
        "Notícias de música, séries, games, cultura pop e moda, escritas por jovens.",
        "Uma seleção do acervo para leitura no site. Abra a edição na seção Conexão Weekly.",
        "Produto planejado: conversas sobre cultura jovem. Ainda não há episódios publicados.",
        "Produto planejado: vídeos de até 60 segundos com as pautas do jornal. Ainda não há vídeos publicados."
    ],
    "institucional": {
        "redes": {
            "titulo": "Instagram do projeto",
            "html": "<p>O perfil do jornal ainda está em planejamento. Nesta entrega não há conta de Instagram conectada.</p>"
        },
        "trabalhe": {
            "titulo": "Trabalhe Conosco",
            "html": "<p>Este é um projeto escolar, sem processo seletivo ativo. Para colaborar com a redação, converse com o grupo responsável na turma.</p>"
        },
        "privacidade": {
            "titulo": "Política de Privacidade",
            "html": "<p>Este protótipo salva matérias, checklists e mensagens do chat de teste neste navegador. A sessão usa o armazenamento da aba. Não há cadastro ou envio de newsletter por e-mail, nem serviço de análise de audiência.</p><p>Use Sair para encerrar a sessão. Limpar os dados do site no navegador apaga o conteúdo local: exporte as matérias antes. O backup inclui textos, responsáveis e rascunhos; não inclui senhas, sessões ou mensagens do chat.</p><p>Fotos podem ser carregadas do Unsplash. Links de fontes abrem sites externos. Se o grupo configurar o Firebase do chat, as mensagens passam a ser enviadas ao banco informado, conforme CHAT.md. Não use dados pessoais reais nesta simulação.</p>"
        }
    }
};
    PRODUTOS.forEach((produto,i)=>{ produto.desc = textos.produtos[i]; });
    Object.assign(INSTITUCIONAL,textos.institucional);
    const bloco = SETORES.gestao.blocos.find(b=>b.titulo === 'Produtos da empresa');
    if (bloco) bloco.itens = PRODUTOS.map(p=>'<strong>'+p.nome+':</strong> '+p.desc);
})();
