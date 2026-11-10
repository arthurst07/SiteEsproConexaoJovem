/* =========================================================
   DADOS DO SITE CONEXÃO JOVEM
   Tudo que é "conteúdo" fica aqui: notícias, produtos,
   contas da intranet e painéis dos setores.
   Carregado pelo index.html e pelas páginas de setor.
   ========================================================= */

/* ---------- CATEGORIAS (chave usada no menu) ---------- */
const CATEGORIAS = {
    home:    { nome: "Home" },
    musica:  { nome: "Música" },
    series:  { nome: "Séries & Filmes" },
    cultura: { nome: "Cultura Pop" },
    games:   { nome: "Games" },
    moda:    { nome: "Moda" }
};

/* ---------- NOTÍCIAS ----------
   cat: chave da categoria | cor: blue | pink | orange
   Os ids 1 a 4 aparecem no destaque da Home. */
const NOTICIAS = [
    {
        "id": 1,
        "cat": "musica",
        "label": "MÚSICA",
        "cor": "pink",
        "icone": "fa-headphones-alt",
        "titulo": "Trap brasileiro: um guia para começar a explorar a cena",
        "resumo": "Um roteiro de escuta para conhecer artistas, comparar estilos e valorizar a produção brasileira.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 15 minutos",
        "texto": [
            "O trap é uma vertente do hip-hop reconhecida por elementos como graves marcantes e padrões de bateria eletrônica. No Brasil, o contato com outras cenas musicais abre espaço para diferentes formas de produzir e contar histórias.",
            "Para começar, escolha três artistas de regiões diferentes. Ouça uma faixa de cada um e anote o que muda na letra, no ritmo e nos instrumentos. Leia os créditos: produtores, compositores e técnicos também participam da criação.",
            "Proposta para a turma: montar uma playlist comentada, com uma indicação por pessoa e uma explicação da escolha. Antes de compartilhar, confira a classificação do conteúdo e respeite os direitos de quem produziu as faixas."
        ]
    },
    {
        "id": 2,
        "cat": "series",
        "label": "SÉRIES",
        "cor": "blue",
        "icone": "fa-tv",
        "titulo": "Stranger Things: como analisar uma série além dos spoilers",
        "resumo": "Trilha, personagens e direção de arte podem render uma boa conversa sobre audiovisual.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 1 hora",
        "texto": [
            "Uma análise cultural pode ir além de contar o final de uma história. Observe como cenários, roupas e músicas ajudam a construir a época e o ambiente de uma série.",
            "Escolha uma cena de Stranger Things e descreva o que ela comunica pela imagem e pelo som. Depois, compare sua interpretação com a de um colega: a mesma sequência pode provocar leituras diferentes.",
            "Ao escrever uma crítica para o jornal, avise se há spoilers e separe sua opinião das informações sobre a produção. Notícias de novas temporadas ou derivados devem ser checadas nos canais oficiais antes de publicar."
        ]
    },
    {
        "id": 3,
        "cat": "games",
        "label": "GAMES",
        "cor": "pink",
        "icone": "fa-gamepad",
        "titulo": "GTA e os rumores: como separar anúncio oficial de especulação",
        "resumo": "Um checklist para acompanhar games sem transformar vazamento em certeza.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 2 horas",
        "texto": [
            "Uma imagem circulando nas redes não prova que uma mecânica estará na versão final de um jogo. Ela pode estar fora de contexto, ter sido alterada ou registrar uma etapa antiga de desenvolvimento.",
            "Antes de compartilhar uma novidade, procure a publicação original, sua data e um anúncio do estúdio. Se não houver confirmação, descreva o conteúdo como rumor e explique o que ainda não é conhecido.",
            "Exercício de redação: compare uma manchete de fã com um comunicado oficial. Registre as diferenças e evite títulos que anunciem como certo algo que a própria fonte trata como hipótese."
        ]
    },
    {
        "id": 4,
        "cat": "cultura",
        "label": "CULTURA POP",
        "cor": "orange",
        "icone": "fa-camera-retro",
        "titulo": "Nostalgia no feed: como investigar uma tendência cultural",
        "resumo": "Fotos, roupas e músicas antigas podem virar pauta sem generalizar uma geração.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 3 horas",
        "texto": [
            "Você viu uma estética antiga reaparecer no seu feed? Esse pode ser um ponto de partida para uma reportagem, mas o seu perfil não representa todos os jovens.",
            "Guarde exemplos com data, identifique as referências visuais e converse com pessoas que usam esse estilo. Pergunte o que elas gostam e de onde conheceram a referência.",
            "No texto final, apresente os exemplos e os limites da observação. Prefira “nos perfis que acompanhamos” a afirmar que toda uma geração pensa ou se veste da mesma forma."
        ]
    },
    {
        "id": 5,
        "cat": "musica",
        "label": "MÚSICA",
        "cor": "orange",
        "icone": "fa-headphones-alt",
        "grad": "linear-gradient(45deg, #ff9f5a, #f94b76)",
        "titulo": "Vai a um festival? Organize seu rolê com este checklist",
        "resumo": "Ingresso, deslocamento e cuidados básicos para planejar uma saída com amigos.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Hoje",
        "texto": [
            "Antes de comprar, confira no site oficial a data, o endereço, a classificação etária, as atrações anunciadas e as regras de entrada. Salve o comprovante e evite pagamentos a perfis cuja identidade você não conseguiu verificar.",
            "Planeje a ida e a volta. Combine um ponto de encontro, confira horários do transporte e deixe o celular carregado. Leve apenas itens permitidos e confira a previsão do tempo.",
            "Monte um orçamento incluindo alimentação, transporte e eventuais taxas. Se for usar meia-entrada, verifique quais documentos o organizador exige. Este guia não substitui o regulamento do evento."
        ]
    },
    {
        "id": 6,
        "cat": "series",
        "label": "CINEMA",
        "cor": "blue",
        "icone": "fa-film",
        "grad": "linear-gradient(45deg, #1d7dbc, #ffca76)",
        "titulo": "Três filmes brasileiros para uma conversa em grupo",
        "resumo": "Uma seleção editorial para discutir memória, cotidiano e formas de contar histórias.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Ontem",
        "texto": [
            "O Menino e o Mundo, de Alê Abreu, é uma animação que permite observar como cor, música e movimento contam uma história. Que sentimentos o filme desperta sem depender de longos diálogos?",
            "Hoje Eu Quero Voltar Sozinho, de Daniel Ribeiro, pode iniciar uma conversa sobre autonomia, amizade e relações na adolescência. Quais escolhas dos personagens ampliam ou limitam sua independência?",
            "Que Horas Ela Volta?, de Anna Muylaert, oferece material para discutir trabalho e desigualdade. Antes da sessão, consulte a classificação indicativa e procure uma forma legal de acesso. A disponibilidade nas plataformas muda; esta lista não promete catálogo específico."
        ]
    },
    {
        "id": 7,
        "cat": "moda",
        "label": "MODA & ARTE",
        "cor": "pink",
        "icone": "fa-palette",
        "grad": "linear-gradient(45deg, #f94b76, #ff9f5a)",
        "titulo": "Moda com reaproveitamento: três formas de começar",
        "resumo": "Cuide, troque e transforme peças antes de comprar novas.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Ontem",
        "texto": [
            "Comece olhando o que já existe no armário. Separe roupas para pequenos reparos, peças que podem ganhar novos usos e itens em bom estado que você não utiliza.",
            "Organize uma troca com amigos: combinem condições das peças e permitam que cada pessoa escolha sem pressão. Não é necessário transformar a troca em competição ou obrigação de consumo.",
            "Para customizar, experimente bordados, patches ou ajustes simples. Busque orientação antes de usar ferramentas ou produtos químicos. Não chame uma marca de sustentável apenas por uma campanha: procure informações sobre produção e materiais."
        ]
    },
    {
        "id": 8,
        "cat": "musica",
        "label": "MÚSICA",
        "cor": "pink",
        "icone": "fa-guitar",
        "titulo": "Como montar uma playlist colaborativa com seus amigos",
        "resumo": "Um passo a passo para transformar a lista de músicas em uma seleção do grupo.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 2 dias",
        "texto": [
            "Definam uma proposta: viagem, intervalo, festa ou descoberta de novos artistas. Combinem quantas faixas cada participante pode acrescentar e se há restrições de conteúdo.",
            "Na plataforma escolhida, crie a playlist e consulte as opções de colaboração. Compartilhe o convite apenas com o grupo; as configurações de acesso variam conforme o serviço.",
            "Para dar personalidade à seleção, cada pessoa pode escrever uma frase sobre sua escolha. Revisem periodicamente os convites e evitem publicar informações pessoais na descrição."
        ]
    },
    {
        "id": 9,
        "cat": "series",
        "label": "SÉRIES",
        "cor": "blue",
        "icone": "fa-tv",
        "titulo": "Quer começar a ver doramas? Escolha pelo gênero",
        "resumo": "Romance, suspense ou comédia: procure uma história que combine com o que você gosta.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 2 dias",
        "texto": [
            "O termo dorama é usado no Brasil para diferentes produções seriadas asiáticas; k-drama se refere a dramas sul-coreanos. Não trate países e culturas diferentes como se fossem uma única experiência.",
            "Procure sinopses sem spoilers e confira classificação indicativa, duração e disponibilidade legal. Se você gosta de suspense, não precisa começar por um romance apenas porque ele ficou famoso.",
            "Depois de assistir, escreva uma crítica curta: apresente a proposta, descreva um aspecto que chamou sua atenção e justifique sua opinião. Evite generalizar a cultura de um país a partir de uma obra."
        ]
    },
    {
        "id": 10,
        "cat": "cultura",
        "label": "CULTURA POP",
        "cor": "orange",
        "icone": "fa-book-open",
        "titulo": "Do BookTok ao clube de leitura: transforme indicação em conversa",
        "resumo": "Um roteiro para escolher um livro e discutir a leitura com a turma.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 3 dias",
        "texto": [
            "Vídeos de recomendação podem ajudar a descobrir livros, mas popularidade não garante que a leitura combine com você. Confira a sinopse e experimente uma amostra antes de decidir.",
            "O grupo pode começar por um conto de Machado de Assis, como A Cartomante, disponível em acervos de domínio público. Combinem prazo, forma de acesso e perguntas para o encontro.",
            "Durante a conversa, deixem espaço para interpretações diferentes. Quem não terminou também pode participar, desde que o grupo combine como lidar com spoilers. Não compartilhem cópias não autorizadas de livros protegidos."
        ]
    },
    {
        "id": 11,
        "cat": "cultura",
        "label": "CULTURA POP",
        "cor": "orange",
        "icone": "fa-microphone",
        "titulo": "Podcast da turma: como produzir um episódio piloto",
        "resumo": "Pauta, gravação e edição em um projeto curto e possível.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 4 dias",
        "texto": [
            "Escolham uma pergunta central para um episódio de cinco a oito minutos. Preparem uma abertura, três tópicos e um encerramento; um roteiro simples ajuda a manter o foco.",
            "Gravem em um lugar silencioso e testem o áudio antes da conversa. Peçam autorização aos convidados e combinem como o material será usado e publicado.",
            "Na edição, retirem pausas excessivas sem mudar o sentido das falas. Usem apenas músicas e efeitos com autorização ou licença adequada. Publiquem créditos, fontes e uma transcrição para ampliar o acesso."
        ]
    },
    {
        "id": 12,
        "cat": "games",
        "label": "GAMES",
        "cor": "pink",
        "icone": "fa-trophy",
        "titulo": "Esports: como acompanhar um campeonato com olhar crítico",
        "resumo": "Entenda formato, calendário e resultados antes de escrever sobre competição.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 2 dias",
        "texto": [
            "Para cobrir um torneio, comece pelo regulamento e pelo canal oficial da organização. Confira quais equipes participam, o formato das partidas e o fuso dos horários anunciados.",
            "Anote placar, fase e data de cada jogo. Uma boa campanha em uma etapa não significa automaticamente liderança de todo o cenário: contextualize os resultados.",
            "Ao publicar, diferencie informação, análise e torcida. Links da transmissão oficial e uma explicação breve das regras ajudam quem está chegando agora."
        ]
    },
    {
        "id": 13,
        "cat": "games",
        "label": "GAMES",
        "cor": "pink",
        "icone": "fa-dice-d20",
        "titulo": "Três jogos brasileiros para conhecer novas ideias",
        "resumo": "Uma seleção de gêneros diferentes para explorar a produção nacional.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 5 dias",
        "texto": [
            "Dandara, da Long Hat House, apresenta exploração em um mundo de fantasia com uma forma própria de movimentação. Observe como o deslocamento muda sua leitura do cenário.",
            "Chroma Squad, da Behold Studios, combina estratégia com a proposta de administrar uma equipe de heróis de televisão. Observe como o jogo transforma produção audiovisual em decisões de partida.",
            "Horizon Chase, da Aquiris, aposta em corridas de inspiração arcade. Antes de comprar qualquer título, consulte a página oficial, classificação indicativa, requisitos e plataformas disponíveis. As indicações são escolhas editoriais, sem promessa de preço ou promoção."
        ]
    },
    {
        "id": 14,
        "cat": "moda",
        "label": "MODA & ARTE",
        "cor": "pink",
        "icone": "fa-shirt",
        "titulo": "Y2K no guarda-roupa: referências sem compra por impulso",
        "resumo": "Como experimentar estilos dos anos 2000 usando o que você já tem.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 3 dias",
        "texto": [
            "O rótulo Y2K reúne referências variadas à virada do milênio. Em vez de procurar uma definição rígida, observe formas, cores e acessórios nas imagens que inspiram você.",
            "Teste uma combinação com peças do seu armário. Acessórios coloridos e uma mudança na sobreposição já podem produzir outra leitura do mesmo conjunto.",
            "Se decidir comprar, defina um orçamento e compare qualidade e utilidade. Tendências não são regras: conforto e gosto pessoal também fazem parte da escolha."
        ]
    },
    {
        "id": 15,
        "cat": "moda",
        "label": "MODA & ARTE",
        "cor": "pink",
        "icone": "fa-spray-can",
        "titulo": "Arte urbana: monte um roteiro de observação no seu bairro",
        "resumo": "Um exercício de reportagem sobre imagens, memória e espaço público.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 6 dias",
        "texto": [
            "Escolha um trajeto seguro e observe murais, painéis e intervenções. Anote localização, data da visita e assinatura do artista, quando houver. Não entre em propriedades sem autorização.",
            "Pesquise a autoria e o contexto antes de interpretar a obra como se sua leitura fosse a única possível. Se houver oportunidade, entreviste o artista com consentimento e registre a fala com fidelidade.",
            "Ao publicar fotos, dê crédito ao fotógrafo e identifique a obra. Grafite e pichação têm histórias e debates próprios: evite reduzir o assunto a uma frase que apague essa complexidade."
        ]
    },
    {
        "id": 16,
        "cat": "series",
        "label": "CINEMA",
        "cor": "blue",
        "icone": "fa-clapperboard",
        "titulo": "Animação além da infância: um roteiro para analisar a linguagem",
        "resumo": "O formato pode contar histórias para públicos e idades diferentes.",
        "autor": "Redação Conexão Jovem",
        "tempo": "Há 4 dias",
        "texto": [
            "Animação é uma linguagem audiovisual e não determina, sozinha, a faixa etária de uma obra. Consulte sempre a classificação e os temas abordados antes de recomendar um título.",
            "Para uma conversa sobre cinema brasileiro, Uma História de Amor e Fúria, de Luiz Bolognesi, permite observar como animação e narrativa histórica se relacionam. Confira a classificação indicativa antes da sessão.",
            "Na crítica, comente escolhas de desenho, movimento e som. Evite presumir que uma estética simples significa uma história superficial ou que toda animação serve ao público infantil."
        ]
    }
];

/* ---------- PRODUTOS DA EMPRESA ---------- */
const PRODUTOS = [
    {
        "icone": "fa-newspaper",
        "nome": "Portal Conexão Jovem",
        "desc": "Notícias de música, séries, games, cultura pop e moda, escritas por jovens."
    },
    {
        "icone": "fa-envelope-open-text",
        "nome": "Newsletter Conexão Weekly",
        "desc": "Seleção das matérias publicadas, disponível no botão Abrir edição. Sem envio de e-mail."
    },
    {
        "icone": "fa-podcast",
        "nome": "Podcast Papo Conexão",
        "desc": "Projeto em desenvolvimento. O guia de podcast do portal ajuda a turma a produzir o episódio piloto."
    },
    {
        "icone": "fa-video",
        "nome": "Vídeos Curtos",
        "desc": "Proposta de produto: vídeos curtos derivados das pautas. Ainda não há canal de publicação conectado."
    }
];

/* ---------- INSTITUCIONAL (rodapé) ---------- */
const INSTITUCIONAL = {
    "quem-somos": {
        "titulo": "Quem Somos - Conexão Jovem",
        "html": "<p>O Conexão Jovem é um jornal laboratório criado por uma turma do curso Espro para a atividade de gestão de uma empresa fictícia. Nosso foco é cultura, entretenimento e informação útil para jovens.</p><p>Gestão coordena o projeto; Produção revisa os textos; Marketing planeja a divulgação; RH organiza a equipe e TI mantém o site. As contas e indicadores são demonstrativos.</p><p>Os textos iniciais são exemplos de guias editoriais. Notícias novas devem ser apuradas, assinadas e acompanhadas de fontes. Opiniões e rumores devem ser identificados como tais.</p>"
    },
    "trabalhe": {
        "titulo": "Participe da redação",
        "html": "<p>Este é um projeto escolar, sem processo seletivo ou endereço de recrutamento ativo. Para participar, converse com os responsáveis pelo trabalho na turma.</p><p>Colaborações possíveis: sugestão de pauta, entrevista autorizada, fotografia com crédito, revisão e desenvolvimento. Não envie dados pessoais por este site.</p>"
    },
    "privacidade": {
        "titulo": "Política de Privacidade",
        "html": "<p>Este protótipo não envia cadastros, senhas ou matérias a um servidor. Não há inscrição de newsletter: a edição é lida na própria página.</p><p>As matérias e os checklists são salvos no armazenamento local deste navegador. A sessão de demonstração é mantida no armazenamento da aba. Para encerrar a sessão, use Sair.</p><p>Você pode apagar esses dados nas configurações do navegador; isso também apaga edições sem backup. A redação permite exportar e importar as matérias. O arquivo inclui autoria, responsável e rascunhos, mas não senhas ou sessões. Não cadastre informações pessoais reais.</p><p>Links de fontes abrem sites externos, com suas próprias políticas. Não existem serviços de análise de audiência, anúncios ou envio de e-mail integrados neste projeto.</p>"
    }
};

/* =========================================================
   INTRANET (simulação para a atividade)
   Atenção: este login é só uma demonstração. Como o site é
   estático, as contas ficam visíveis no código-fonte; num
   sistema real a validação seria feita em um servidor.
   ========================================================= */
const USUARIOS = {
    "conexaojovemti@gmail.com":      { senha: "Rayane",        setor: "ti" },
    "conexaojovemrh@gmail.com":      { senha: "Michelle",      setor: "rh" },
    "conexaojovemgestao@gmail.com":  { senha: "CArlosLarissa", setor: "gestao" },
    "conexaojovemmkt@gmail.com":     { senha: "Isis",          setor: "marketing" },
    "conexaojovemprod@gmail.com":    { senha: "Samuel",        setor: "producao" }
};

const MURAL_AVISOS = [
    "📅 <strong>Reunião Geral (All-Hands):</strong> sexta-feira, às 10h00, via plataforma interna.",
    "☕ <strong>Café com a Diretoria:</strong> toda última quinta-feira do mês, no espaço convivência.",
    "🛡️ <strong>Política de Segurança de Dados:</strong> não compartilhe senhas ou links de rascunho externo."
];

/* ---------- PAINÉIS POR SETOR ----------
   Usados no painel da intranet (resumo) e nas páginas
   paginas/<setor>.html (visão completa). */
const SETORES = {
    ti: {
        titulo: "Tecnologia & Sistemas (TI)", icone: "fa-shield-alt",
        missao: "Manter o portal no ar, seguro e rápido, e dar suporte tecnológico a todas as equipes.",
        kpis: [
            { rotulo: "Servidores online", valor: "100%" },
            { rotulo: "Incidentes críticos", valor: "0" },
            { rotulo: "Chamados abertos", valor: "4" },
            { rotulo: "Tempo médio de carregamento", valor: "1,8 s" }
        ],
        entregas: [
            { nome: "Portal Conexão Jovem (site público)", status: "No ar", prazo: "Concluído" },
            { nome: "Intranet por setor", status: "No ar", prazo: "Concluído" },
            { nome: "Busca por matérias", status: "Em teste", prazo: "Esta semana" },
            { nome: "Backup automático diário", status: "Planejado", prazo: "Próximo mês" }
        ],
        blocos: [
            { titulo: "Infraestrutura", itens: ["Hospedagem do portal e certificado HTTPS em dia.", "Monitoramento de disponibilidade a cada 5 minutos.", "Rotina de atualização de dependências toda segunda-feira."] },
            { titulo: "Segurança", itens: ["Senhas individuais por setor, trocadas a cada trimestre.", "Nunca enviar credenciais por e-mail ou chat.", "Incidentes devem ser abertos como chamado com prioridade alta."] }
        ],
        tarefas: ["Revisar chamados pendentes", "Testar o formulário da newsletter", "Atualizar a documentação do site", "Conferir backup semanal"]
    },
    rh: {
        titulo: "Recursos Humanos (RH)", icone: "fa-users-cog",
        missao: "Cuidar das pessoas: contratação, bem-estar, desenvolvimento e cultura da redação.",
        kpis: [
            { rotulo: "Colaboradores ativos", valor: "28" },
            { rotulo: "Vagas abertas", valor: "2" },
            { rotulo: "Alertas de banco de horas", valor: "3" },
            { rotulo: "Satisfação interna", valor: "4,6 / 5" }
        ],
        entregas: [
            { nome: "Ciclo de avaliação de desempenho", status: "Em andamento", prazo: "Dia 20" },
            { nome: "Processo seletivo: Editor(a) de Redação", status: "Em andamento", prazo: "15 dias" },
            { nome: "Programa de integração de novos colaboradores", status: "Concluído", prazo: "Entregue" },
            { nome: "Pesquisa de clima trimestral", status: "Planejado", prazo: "Próximo mês" }
        ],
        blocos: [
            { titulo: "Pessoas e benefícios", itens: ["Folha do trimestre processada e auditada.", "Vale-alimentação e auxílio-internet mantidos.", "Política de trabalho híbrido: 2 dias presenciais por semana."] },
            { titulo: "Cultura", itens: ["Café com a Diretoria toda última quinta-feira do mês.", "Reconhecimento mensal de destaque da redação.", "Canal anônimo para sugestões e denúncias."] }
        ],
        tarefas: ["Alinhar banco de horas com os gestores", "Divulgar vagas internas", "Enviar lembrete da avaliação de desempenho", "Organizar o próximo café com a diretoria"]
    },
    gestao: {
        titulo: "Gestão & Diretoria Executiva", icone: "fa-chart-pie",
        missao: "Definir a estratégia da empresa, acompanhar metas e garantir que os produtos cheguem ao público.",
        kpis: [
            { rotulo: "Faturamento mensal", valor: "R$ 142.500" },
            { rotulo: "Meta de audiência", valor: "82%" },
            { rotulo: "Visualizações mensais", valor: "2,4 mi" },
            { rotulo: "Patrocinadores ativos", valor: "6" }
        ],
        entregas: [
            { nome: "Plano de expansão do estúdio de podcast", status: "Aprovado", prazo: "Q4" },
            { nome: "Relatório financeiro consolidado", status: "Em andamento", prazo: "Fim do mês" },
            { nome: "Renovação de contratos com patrocinadores", status: "Em andamento", prazo: "30 dias" },
            { nome: "Lançamento da newsletter paga", status: "Planejado", prazo: "Q1" }
        ],
        blocos: [
            { titulo: "Produtos da empresa", itens: PRODUTOS.map(p => "<strong>" + p.nome + ":</strong> " + p.desc) },
            { titulo: "Organograma", itens: ["Diretoria Executiva (Gestão)", "TI, RH, Marketing & Growth e Produção & Redação reportam à Diretoria.", "Reuniões de alinhamento semanais às sextas, 10h."] }
        ],
        tarefas: ["Aprovar orçamento das campanhas", "Revisar metas do trimestre", "Reunir com patrocinadores", "Consolidar relatório financeiro"]
    },
    marketing: {
        titulo: "Marketing & Growth", icone: "fa-bullhorn",
        missao: "Fazer o Conexão Jovem ser encontrado, lembrado e compartilhado pelo público jovem.",
        kpis: [
            { rotulo: "Seguidores (Instagram)", valor: "184 mil" },
            { rotulo: "Engajamento médio", valor: "6,2%" },
            { rotulo: "CAC por leitor", valor: "-14%" },
            { rotulo: "Inscritos na newsletter", valor: "9.300" }
        ],
        entregas: [
            { nome: "Campanha de lançamento \"Projeto Z\"", status: "Agendada", prazo: "01/09" },
            { nome: "Calendário de posts do mês", status: "Em andamento", prazo: "Esta semana" },
            { nome: "Parcerias com criadores de conteúdo", status: "Em negociação", prazo: "15 dias" },
            { nome: "Biblioteca de identidade visual", status: "Concluído", prazo: "Entregue" }
        ],
        blocos: [
            { titulo: "Redes sociais", itens: ["Instagram: 5 posts e 10 stories por semana.", "TikTok: 3 vídeos curtos por semana, com foco na pauta do dia.", "Responder comentários em até 24 horas."] },
            { titulo: "Crescimento", itens: ["Testes A/B nas manchetes da newsletter.", "Parcerias com escolas, coletivos e festivais.", "Meta do trimestre: dobrar inscritos na newsletter."] }
        ],
        tarefas: ["Fechar cronograma de posts", "Aprovar artes da campanha", "Enviar proposta aos influenciadores", "Analisar métricas da semana"]
    },
    producao: {
        titulo: "Produção de Conteúdo & Redação", icone: "fa-video",
        missao: "Produzir matérias, vídeos e podcasts com qualidade, linguagem jovem e checagem de fatos.",
        kpis: [
            { rotulo: "Matérias publicadas na semana", valor: "42" },
            { rotulo: "Pautas em aprovação", valor: "7" },
            { rotulo: "Episódios de podcast em edição", valor: "3" },
            { rotulo: "Vídeos curtos na fila", valor: "9" }
        ],
        entregas: [
            { nome: "Pauta do dia", status: "Aprovada", prazo: "Hoje" },
            { nome: "Cobertura do festival de música urbana", status: "Em produção", prazo: "Fim de semana" },
            { nome: "Episódio 12 do Papo Conexão", status: "Em edição", prazo: "Quinta" },
            { nome: "Série de matérias sobre moda sustentável", status: "Planejado", prazo: "Próxima semana" }
        ],
        blocos: [
            { titulo: "Rotina da redação", itens: ["Reunião de pauta às 9h30.", "Toda matéria passa por revisão e checagem antes de ir ao ar.", "Fechamento do dia às 18h."] },
            { titulo: "Diretrizes editoriais", itens: ["Linguagem nativa das redes, sem termos corporativos ultrapassados.", "Sempre citar as fontes.", "Conteúdo em embargo só sai no horário combinado com a direção."] }
        ],
        tarefas: ["Revisar matérias do dia", "Reservar câmeras para a cobertura externa", "Finalizar edição do podcast", "Atualizar o banco de pautas"]
    }
};

