/* =========================================================
   DADOS DO SITE CONEXÃO JOVEM
   Tudo que é "conteúdo" fica aqui: notícias, imagens, produtos,
   contas da intranet, painéis dos setores e dados da empresa.
   Carregado pelo index.html e pelas páginas de setor.

   COMO EDITAR (para o grupo):
   - NOTICIAS ........ texto das matérias
   - IMAGENS ......... foto de cada matéria (id da notícia -> foto)
   - EMPRESA ......... missão, visão, valores, organograma, SWOT,
                       cronograma e orçamento (página da Gestão)
   - SETORES ......... KPIs, projetos e checklist de cada setor
   - USUARIOS ........ contas da intranet
   Os números e textos são FICTÍCIOS (exemplo): troque pelos
   dados que o grupo definiu para a empresa.
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
        id: 1, cat: "musica", label: "MÚSICA", cor: "pink", icone: "fa-headphones-alt",
        titulo: "O Fenômeno do Trap Nacional que está Conquistando os Palcos Internacionais",
        resumo: "Descubra como os novos artistas estão redefinindo a sonoridade urbana e levando a cultura brasileira para festivais globais.",
        autor: "Redação Conexão Jovem", tempo: "Há 15 minutos",
        texto: [
            "O trap brasileiro vive sua fase mais criativa. Produtores e rappers de periferias de várias capitais misturam batidas graves com funk, pagode e sons regionais, criando uma assinatura que não se parece com nada do que vem de fora.",
            "O resultado aparece nos números: clipes com milhões de visualizações em poucos dias, turnês esgotadas e convites para festivais na Europa e nos Estados Unidos.",
            "Para quem acompanha a cena, o segredo está na autenticidade. As letras falam de rotina, amizade e superação, e é isso que conecta o público jovem de dentro e de fora do país."
        ]
    },
    {
        id: 2, cat: "series", label: "SÉRIES", cor: "blue", icone: "fa-tv",
        titulo: "A 4ª temporada de Stranger Things deixou um legado? O que esperar do novo spin-off",
        resumo: "Com o encerramento da série, fãs discutem o que fica e o que pode vir nos próximos projetos do universo.",
        autor: "Redação Conexão Jovem", tempo: "Há 1 hora",
        texto: [
            "Poucas séries moldaram tanto a cultura pop recente. Stranger Things trouxe de volta a trilha oitentista, as bicicletas e o clima de aventura em grupo, e fez uma geração inteira reencontrar Kate Bush nas playlists.",
            "Com o encerramento da série, o debate agora é sobre o legado: o que ela ensinou ao streaming sobre construir mundos e manter uma comunidade de fãs ativa por anos.",
            "Sobre o spin-off, o que se sabe até agora é que o foco deve sair do grupo principal e explorar novos personagens e outras épocas de Hawkins."
        ]
    },
    {
        id: 3, cat: "games", label: "GAMES", cor: "pink", icone: "fa-gamepad",
        titulo: "GTA VI: Vazamentos indicam novas mecânicas focadas em redes sociais no jogo",
        resumo: "A expectativa pelo novo jogo da Rockstar continua alta, e rumores apontam para uma versão satírica das redes sociais.",
        autor: "Redação Conexão Jovem", tempo: "Há 2 horas",
        texto: [
            "A Rockstar Games prepara um sistema dinâmico em que personagens e eventos do mundo aberto reagem ao que acontece em uma rede social própria do jogo, segundo rumores que circulam entre fãs.",
            "Vale lembrar: nada disso foi confirmado oficialmente. A empresa costuma revelar detalhes aos poucos, e vazamentos nem sempre refletem a versão final.",
            "Enquanto isso, a comunidade segue analisando cada trailer quadro a quadro em busca de pistas."
        ]
    },
    {
        id: 4, cat: "cultura", label: "CULTURA POP", cor: "orange", icone: "fa-camera-retro",
        titulo: "Aesthetics de 2014 estão de volta? Entenda a nostalgia da Geração Z",
        resumo: "Tumblr grunge, flash de câmera e filtros saturados voltam ao feed. Por que a nostalgia está tão forte?",
        autor: "Redação Conexão Jovem", tempo: "Há 3 horas",
        texto: [
            "Tumblr grunge, fotos com flash estourado e playlists de indie pop: a estética de 2014 está de volta e domina o feed da Geração Z.",
            "Especialistas em comportamento apontam que a nostalgia funciona como refúgio. Em um mundo acelerado, lembrar de uma internet mais simples traz conforto.",
            "O curioso é que muita gente que usa a tendência era criança na época. É nostalgia de segunda mão, construída em cima de vídeos e memes."
        ]
    },
    {
        id: 5, cat: "musica", label: "MÚSICA", cor: "orange", icone: "fa-headphones-alt", grad: "linear-gradient(45deg, #ff9f5a, #f94b76)",
        titulo: "Festivais de Verão: Line-ups confirmados surpreendem o público jovem",
        resumo: "Prepare o glitter e o look: os maiores eventos de 2026 prometem experiências imersivas.",
        autor: "Redação Conexão Jovem", tempo: "Hoje",
        texto: [
            "A temporada de shows ao ar livre trará experiências imersivas, com palcos temáticos, áreas de descanso e instalações de arte.",
            "Os line-ups misturam nomes consagrados com artistas da cena independente, e vários festivais anunciaram ingressos promocionais para estudantes.",
            "Dica de quem já foi: confira o regulamento de cada evento sobre mochilas, leve protetor solar e combine o ponto de encontro com os amigos antes de entrar."
        ]
    },
    {
        id: 6, cat: "series", label: "CINEMA", cor: "blue", icone: "fa-film", grad: "linear-gradient(45deg, #1d7dbc, #ffca76)",
        titulo: "Os filmes independentes que todo jovem deveria assistir este ano",
        resumo: "Saiba quais produções fora do eixo Hollywood estão dominando as conversas no Letterboxd.",
        autor: "Redação Conexão Jovem", tempo: "Ontem",
        texto: [
            "Longe das grandes bilheterias, o cinema independente vive um bom momento, com histórias pequenas e muito pessoais ganhando espaço em festivais e plataformas.",
            "No Letterboxd, as listas de fãs destacam dramas de amadurecimento, comédias de baixo orçamento e ficções científicas feitas com muita criatividade.",
            "Uma boa forma de começar é procurar as mostras gratuitas dos cinemas de rua e dos centros culturais da sua cidade."
        ]
    },
    {
        id: 7, cat: "moda", label: "MODA & ARTE", cor: "pink", icone: "fa-palette", grad: "linear-gradient(45deg, #f94b76, #ff9f5a)",
        titulo: "Streetwear sustentável: marcas locais ganham espaço no guarda-roupa Z",
        resumo: "Como o consumo consciente se tornou a principal bandeira fashion da nova geração.",
        autor: "Redação Conexão Jovem", tempo: "Ontem",
        texto: [
            "O garimpo e o reaproveitamento de tecidos deixaram de ser nicho. Brechós, upcycling e marcas pequenas que produzem em baixa escala aparecem cada vez mais nos looks da galera.",
            "Para a Geração Z, vestir algo com história e com impacto menor no planeta é parte da identidade.",
            "Quem quer entrar na onda sem gastar muito pode começar customizando peças que já tem: patches, tingimento e bordado fazem uma grande diferença."
        ]
    },
    {
        id: 8, cat: "musica", label: "MÚSICA", cor: "pink", icone: "fa-guitar",
        titulo: "Playlists colaborativas: como o streaming virou a nova rodinha de violão",
        resumo: "Amigos montam listas juntos e descobrem artistas novos sem depender do algoritmo.",
        autor: "Redação Conexão Jovem", tempo: "Há 2 dias",
        texto: [
            "Playlists colaborativas viraram ritual em viagens, festas e até em trabalhos de grupo. Cada pessoa adiciona uma faixa e a lista vira um retrato do grupo.",
            "Plataformas de streaming perceberam o movimento e passaram a investir em ferramentas de convite, votação e histórico de quem adicionou o quê.",
            "Para os artistas independentes, isso é uma porta aberta: basta uma faixa cair na lista certa para ganhar novos ouvintes."
        ]
    },
    {
        id: 9, cat: "series", label: "SÉRIES", cor: "blue", icone: "fa-tv",
        titulo: "Doramas e k-dramas: por que o público jovem brasileiro virou fã de carteirinha",
        resumo: "Histórias de amor, suspense e amizade conquistam quem busca algo diferente das produções ocidentais.",
        autor: "Redação Conexão Jovem", tempo: "Há 2 dias",
        texto: [
            "O sucesso dos doramas no Brasil não é por acaso. Episódios com começo, meio e fim bem definidos, roteiros cuidadosos e trilhas marcantes criam uma ligação forte com o público.",
            "Grupos de fãs organizam maratonas, trocam legendas e discutem teorias em redes sociais, fazendo do hábito de assistir uma atividade coletiva.",
            "Para quem quer começar, vale escolher um gênero que já curte, como romance, thriller ou comédia, e ir explorando a partir dele."
        ]
    },
    {
        id: 10, cat: "cultura", label: "CULTURA POP", cor: "orange", icone: "fa-book-open",
        titulo: "BookTok e a volta da leitura: jovens estão lendo mais do que você imagina",
        resumo: "Vídeos curtos recomendando livros fazem best-sellers voltarem ao topo das listas.",
        autor: "Redação Conexão Jovem", tempo: "Há 3 dias",
        texto: [
            "Quem diria que vídeos de 30 segundos fariam livros de centenas de páginas esgotarem nas livrarias? O BookTok transformou a leitura em assunto de rede social.",
            "Os criadores falam de livros com emoção e humor, e isso aproxima quem nunca teve o hábito de ler.",
            "Bibliotecas e escolas já usam as indicações da comunidade para montar clubes de leitura."
        ]
    },
    {
        id: 11, cat: "cultura", label: "CULTURA POP", cor: "orange", icone: "fa-microphone",
        titulo: "Stand-up e podcasts: o humor brasileiro que nasceu na internet",
        resumo: "Comediantes e podcasters mostram que dá para fazer sucesso sem passar pela TV tradicional.",
        autor: "Redação Conexão Jovem", tempo: "Há 4 dias",
        texto: [
            "Cortes de podcasts e esquetes de stand-up circulam o dia inteiro nas redes. O humor brasileiro ganhou novos formatos e uma geração de criadores independentes.",
            "O público jovem valoriza a linguagem natural e o improviso, longe do roteiro fechado de outros tempos.",
            "Casas de stand-up em várias cidades abrem noites de microfone aberto, onde qualquer pessoa pode testar uma piada."
        ]
    },
    {
        id: 12, cat: "games", label: "GAMES", cor: "pink", icone: "fa-trophy",
        titulo: "Cenário competitivo brasileiro: times nacionais batem de frente com as potências",
        resumo: "Do Free Fire ao Valorant, equipes do país vivem boa fase em campeonatos internacionais.",
        autor: "Redação Conexão Jovem", tempo: "Há 2 dias",
        texto: [
            "Os esports brasileiros estão cada vez mais fortes. Equipes formadas em campeonatos regionais agora disputam títulos mundiais.",
            "A profissionalização ajuda: academias de jogadores, psicólogos esportivos e analistas de desempenho fazem parte da rotina das organizações.",
            "Para os fãs, isso significa mais transmissões em português e mais chances de torcer por um time do seu estado."
        ]
    },
    {
        id: 13, cat: "games", label: "GAMES", cor: "pink", icone: "fa-dice-d20",
        titulo: "Jogos indie que merecem sua atenção: pequenos estúdios, grandes ideias",
        resumo: "Desde aventuras artesanais até puzzles criativos, a cena indie segue surpreendendo.",
        autor: "Redação Conexão Jovem", tempo: "Há 5 dias",
        texto: [
            "Sem orçamento de superprodução, os jogos indie apostam em direção de arte própria, narrativas pessoais e mecânicas inusitadas.",
            "Vários estúdios brasileiros se destacam nesse cenário, com jogos que misturam folclore, humor e crítica social.",
            "Promoções em lojas digitais são uma boa chance de montar uma biblioteca variada gastando pouco."
        ]
    },
    {
        id: 14, cat: "moda", label: "MODA & ARTE", cor: "pink", icone: "fa-shirt",
        titulo: "Y2K de volta: calça baggy, óculos pequenos e acessórios coloridos dominam as ruas",
        resumo: "Tendências dos anos 2000 reaparecem misturadas com peças atuais.",
        autor: "Redação Conexão Jovem", tempo: "Há 3 dias",
        texto: [
            "A estética Y2K voltou com tudo: baby tees, calças largas, óculos minúsculos e muitos acessórios.",
            "O segredo para não parecer fantasia é misturar uma ou duas peças da tendência com básicos do dia a dia.",
            "Brechós e feiras de rua são os melhores lugares para achar peças originais da época."
        ]
    },
    {
        id: 15, cat: "moda", label: "MODA & ARTE", cor: "pink", icone: "fa-spray-can",
        titulo: "Arte urbana: grafites transformam muros e fachadas em galerias a céu aberto",
        resumo: "Artistas jovens ocupam as cidades com cor, mensagem e identidade local.",
        autor: "Redação Conexão Jovem", tempo: "Há 6 dias",
        texto: [
            "O grafite deixou de ser visto apenas como pichação e hoje é reconhecido como expressão artística. Murais ganham editais, patrocínio e roteiros turísticos.",
            "Muitos artistas usam o espaço para falar de memória do bairro, ancestralidade e meio ambiente.",
            "Dá para acompanhar a cena pelas redes dos coletivos locais, que divulgam mutirões e novos murais."
        ]
    },
    {
        id: 16, cat: "series", label: "CINEMA", cor: "blue", icone: "fa-clapperboard",
        titulo: "Animações para adultos: o gênero que cresce longe dos desenhos infantis",
        resumo: "Séries e filmes animados com temas maduros ganham prêmios e fãs fiéis.",
        autor: "Redação Conexão Jovem", tempo: "Há 4 dias",
        texto: [
            "Animação não é gênero infantil, e o público jovem sabe disso. Produções com temas como saúde mental, política e relações pessoais vêm ganhando destaque.",
            "O formato permite liberdade visual que o live-action dificilmente alcança, e isso atrai diretores do mundo todo.",
            "Se você ainda não assistiu nenhuma, comece pelas indicações de festivais: costumam ter curtas e longas para todos os gostos."
        ]
    }
];

/* ---------- PRODUTOS DA EMPRESA ---------- */
const PRODUTOS = [
    { icone: "fa-newspaper", nome: "Portal Conexão Jovem", desc: "Notícias de música, séries, games, cultura pop e moda, escritas por jovens." },
    { icone: "fa-envelope-open-text", nome: "Newsletter Conexão Weekly", desc: "Um resumo semanal com o melhor da redação direto no seu e-mail." },
    { icone: "fa-podcast", nome: "Podcast Papo Conexão", desc: "Conversas leves sobre cultura jovem, com convidados da cena independente." },
    { icone: "fa-video", nome: "Vídeos Curtos", desc: "Pílulas de 60 segundos para Instagram e TikTok com as notícias do dia." }
];

/* ---------- INSTITUCIONAL (rodapé) ---------- */
const INSTITUCIONAL = {
    "quem-somos": {
        titulo: "Quem Somos - Conexão Jovem",
        html: "<p>O <strong>Conexão Jovem</strong> nasceu em 2024 com uma missão clara: traduzir o entretenimento, a cultura pop e o estilo de vida da Geração Z sem filtros e com muita autenticidade. Somos um jornal digital multiplataforma feito por redatores jovens que vivem o que escrevem.</p>"
    },
    "trabalhe": {
        titulo: "Trabalhe Conosco",
        html: "<p>Quer fazer parte da redação mais conectada do país? Estamos sempre em busca de talentos para as áreas de Criação de Conteúdo, Social Media, Desenvolvimento Web e Produção de Vídeo.</p><p>Envie seu portfólio para <strong>carreiras@conexaojovem.com.br</strong>.</p>"
    },
    "privacidade": {
        titulo: "Política de Privacidade",
        html: "<p>O Conexão Jovem preza pela transparência e segurança de dados dos nossos leitores, em total conformidade com a LGPD. Coletamos apenas dados essenciais para melhorar sua experiência de navegação em nosso portal.</p><p>O e-mail cadastrado na newsletter é usado apenas para o envio do resumo semanal.</p>"
    }
};

/* =========================================================
   INTRANET (simulação para a atividade)
   Atenção: este login é só uma demonstração. Como o site é
   estático, as contas ficam visíveis no código-fonte; num
   sistema real a validação seria feita em um servidor.
   ========================================================= */
/* Quantidade de integrantes do grupo (usada no cálculo de custo por pessoa).
   Ajuste para o número real do grupo. */
const INTEGRANTES = 6;

/* =========================================================
   CHAT DA EQUIPE (paginas/chat.html)
   - firebaseUrl vazio  -> modo teste: as mensagens ficam salvas só
                           neste navegador (serve para demonstrar).
   - firebaseUrl preenchido -> chat COMPARTILHADO entre todos os
                           computadores/celulares. Passo a passo em CHAT.md.
     Exemplo: "https://meu-projeto-default-rtdb.firebaseio.com"
   ========================================================= */
const CHAT_CONFIG = {
    firebaseUrl: ""
};

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
        missao: "Manter o portal no ar, seguro e rápido, e dar suporte tecnológico às demais equipes.",
        kpis: [
            { rotulo: "Site no ar", valor: "100%" },
            { rotulo: "Incidentes críticos", valor: "0" },
            { rotulo: "Chamados abertos", valor: "2" },
            { rotulo: "Páginas publicadas", valor: "7" }
        ],
        entregas: [
            { nome: "Portal Conexão Jovem (site público)", status: "No ar", prazo: "Concluído" },
            { nome: "Intranet por setor", status: "No ar", prazo: "Concluído" },
            { nome: "Chat interno da equipe", status: "Em teste", prazo: "Esta semana" },
            { nome: "Publicação com link (GitHub Pages)", status: "Planejado", prazo: "Antes da apresentação" }
        ],
        blocos: [
            { titulo: "Infraestrutura", itens: ["Hospedagem gratuita no GitHub Pages (custo zero).", "Código guardado no GitHub: o próprio repositório é a cópia de segurança.", "Toda mudança importante é conferida por outro integrante antes de publicar."] },
            { titulo: "Segurança", itens: ["Uma conta por setor: não compartilhe a senha fora do grupo.", "O login é uma simulação didática (num sistema real seria validado em servidor).", "Problemas do site vão para o chat da equipe como \"Dúvida\"."] }
        ],
        tarefas: ["Revisar chamados pendentes", "Testar o chat da equipe", "Atualizar a documentação do site", "Conferir o link publicado no celular"]
    },
    rh: {
        titulo: "Recursos Humanos (RH)", icone: "fa-users-cog",
        missao: "Cuidar das pessoas da equipe: divisão de tarefas, combinados, reuniões e clima do grupo.",
        kpis: [
            { rotulo: "Integrantes ativos", valor: String(INTEGRANTES) },
            { rotulo: "Reuniões por semana", valor: "2" },
            { rotulo: "Tarefas atrasadas", valor: "0" },
            { rotulo: "Pesquisa de clima", valor: "1 por mês" }
        ],
        entregas: [
            { nome: "Divisão de tarefas por setor", status: "Concluído", prazo: "Entregue" },
            { nome: "Combinados da equipe", status: "Concluído", prazo: "Entregue" },
            { nome: "Calendário de reuniões", status: "Em andamento", prazo: "Esta semana" },
            { nome: "Avaliação final do grupo", status: "Planejado", prazo: "Fim do projeto" }
        ],
        blocos: [
            { titulo: "Pessoas", itens: ["Cada integrante cuida de um setor e ajuda os demais.", "Reuniões curtas combinadas no grupo, com pauta definida antes.", "Quem estiver sobrecarregado avisa no chat para redistribuir."] },
            { titulo: "Cultura", itens: ["Tarefas e dúvidas ficam registradas no chat da equipe.", "Destaque da semana escolhido pelo grupo.", "Feedback sempre respeitoso e com sugestão de melhoria."] }
        ],
        tarefas: ["Marcar a próxima reunião", "Conferir quem está com tarefas pendentes", "Atualizar os combinados da equipe", "Organizar a presença na apresentação"]
    },
    gestao: {
        titulo: "Gestão & Diretoria Executiva", icone: "fa-chart-pie",
        missao: "Definir a estratégia, acompanhar metas e custos mínimos e garantir que os produtos cheguem aos colegas do curso.",
        kpis: [
            { rotulo: "Custo mensal previsto", valor: "-" },
            { rotulo: "Custo por integrante", valor: "-" },
            { rotulo: "Meta de alcance (colegas)", valor: "100" },
            { rotulo: "Patrocinadores", valor: "0 (projeto acadêmico)" }
        ],
        entregas: [
            { nome: "Plano de custos mínimo", status: "Concluído", prazo: "Entregue" },
            { nome: "Relatório do projeto", status: "Em andamento", prazo: "Fim do mês" },
            { nome: "Divulgação para a turma", status: "Planejado", prazo: "Antes da apresentação" },
            { nome: "Avaliação de resultados", status: "Planejado", prazo: "Após a apresentação" }
        ],
        blocos: [
            { titulo: "Produtos da empresa", itens: PRODUTOS.map(p => "<strong>" + p.nome + ":</strong> " + p.desc) },
            { titulo: "Organização", itens: ["Diretoria Executiva (Gestão) coordena TI, RH, Marketing & Growth e Produção & Redação.", "Alinhamento semanal do grupo.", "Dúvidas e tarefas de todos ficam no chat da equipe."] }
        ],
        tarefas: ["Revisar metas da semana", "Conferir o custo mensal previsto", "Combinar a divulgação para a turma", "Consolidar o relatório do projeto"]
    },
    marketing: {
        titulo: "Marketing & Growth", icone: "fa-bullhorn",
        missao: "Fazer o Conexão Jovem ser encontrado, lembrado e compartilhado pelos colegas, sem gastar com anúncios.",
        kpis: [
            { rotulo: "Posts por semana", valor: "3" },
            { rotulo: "Meta de inscritos na newsletter", valor: "50" },
            { rotulo: "Colegas alcançados (meta)", valor: "100" },
            { rotulo: "Gasto com anúncios", valor: "R$ 0" }
        ],
        entregas: [
            { nome: "Perfil no Instagram", status: "Em andamento", prazo: "Esta semana" },
            { nome: "Calendário de posts da semana", status: "Em andamento", prazo: "Esta semana" },
            { nome: "Cartaz com QR code do site", status: "Planejado", prazo: "Antes da apresentação" },
            { nome: "Parcerias com centro acadêmico e atléticas", status: "Planejado", prazo: "15 dias" }
        ],
        blocos: [
            { titulo: "Redes sociais", itens: ["Instagram: 3 posts e stories por semana (orgânico, sem anúncios pagos).", "Divulgar no grupo da turma e em murais do campus.", "Responder comentários em até 24 horas."] },
            { titulo: "Crescimento", itens: ["Meta: 50 inscritos na newsletter.", "QR code do site em cartaz impresso.", "Pedir que professores divulguem o site na turma."] }
        ],
        tarefas: ["Fechar o cronograma de posts", "Aprovar a arte do cartaz", "Convidar o centro acadêmico", "Anotar o alcance da semana"]
    },
    producao: {
        titulo: "Produção de Conteúdo & Redação", icone: "fa-video",
        missao: "Produzir matérias, vídeos e podcast com qualidade, linguagem jovem e checagem de fatos.",
        kpis: [
            { rotulo: "Matérias publicadas na semana", valor: "4" },
            { rotulo: "Pautas em aprovação", valor: "2" },
            { rotulo: "Episódios de podcast em edição", valor: "0" },
            { rotulo: "Vídeos curtos na fila", valor: "2" }
        ],
        entregas: [
            { nome: "Pauta da semana", status: "Aprovada", prazo: "Hoje" },
            { nome: "Matéria especial sobre festivais", status: "Em produção", prazo: "Fim de semana" },
            { nome: "Vídeos curtos de 60 segundos", status: "Em edição", prazo: "Sexta" },
            { nome: "Episódio piloto do podcast", status: "Planejado", prazo: "Próxima semana" }
        ],
        blocos: [
            { titulo: "Rotina da redação", itens: ["Reunião de pauta uma vez por semana.", "Toda matéria é revisada por outra pessoa antes de publicar.", "Fechamento da edição na sexta-feira."] },
            { titulo: "Diretrizes editoriais", itens: ["Linguagem natural, sem termos corporativos.", "Sempre citar as fontes e dar crédito às fotos.", "Boatos e rumores devem ser identificados como tal."] }
        ],
        tarefas: ["Revisar as matérias da semana", "Pedir fotos e conferir os créditos", "Gravar o piloto do podcast", "Atualizar o banco de pautas"]
    }
};


/* =========================================================
   IMAGENS DAS MATÉRIAS (fotos gratuitas do Unsplash)
   Formato: id da notícia: [código da foto, autor da foto]
   Para trocar uma foto, troque o código (a parte "photo-...")
   do endereço de uma imagem do Unsplash.
   Se a foto não carregar, o site mostra um fundo colorido.
   ========================================================= */
const IMAGENS = {
    1:  ["1470229722913-7c0e2dbbafd3", "Yvette de Wit"],
    2:  ["1763132646264-4123ae7cf4a6", "Liana S"],
    3:  ["1612287230202-1ff1d85d1bdf", "Javier Martínez"],
    4:  ["1574974409771-cebec54deb00", "PJ Gal-Szabo"],
    5:  ["1533174072545-7a4b6ad7a6c3", "Danny Howe"],
    6:  ["1489599849927-2ee91cede3ba", "Felix Mooneeram"],
    7:  ["1637228393246-c38a4b3d2011", "Hugo Clément"],
    8:  ["1596628319258-c6f3f387a1ed", "Niclas Illg"],
    9:  ["1560169897-fc0cdbdfa4d5", "Glenn Carstens-Peters"],
    11: ["1524368535928-5b5e00ddc76b", "Vishnu R Nair"],
    12: ["1542751371-adc38448a05e", "Florian Olivo"],
    13: ["1550745165-9bc0b252726f", "Lorenzo Herrera"],
    14: ["1679212622264-646085f5653f", "Bernd Dittrich"],
    15: ["1533158039493-c4a60b44ad33", "Jon Tyson"],
    16: ["1642370324100-324b21fab3a9", "JAM"]
    // 10 (BookTok): sem foto ainda -> usa fundo colorido. Adicione aqui: 10: ["codigo", "autor"]
};

/* Devolve o endereço da foto da matéria (ou null se não houver) */
function imagemUrl(noticia, largura) {
    const item = IMAGENS[noticia.id];
    if (!item) return null;
    return "https://images.unsplash.com/photo-" + item[0] + "?auto=format&fit=crop&w=" + largura + "&q=70";
}

function imagemCredito(noticia) {
    const item = IMAGENS[noticia.id];
    return item ? "Foto: " + item[1] + " / Unsplash" : "";
}

/* =========================================================
   DADOS DA EMPRESA (página da Gestão + "Quem Somos")
   Proposta de exemplo: ajuste ao que o grupo definiu.
   ========================================================= */
const EMPRESA = {
    missao: "Traduzir cultura, entretenimento e estilo de vida da Geração Z com autenticidade, em uma linguagem feita de jovem para jovem.",
    visao: "Ser a principal referência de jornalismo cultural jovem entre os estudantes do curso e, depois, de toda a instituição.",
    valores: ["Autenticidade", "Diversidade e respeito", "Compromisso com a informação correta", "Criatividade", "Trabalho em equipe"],
    organograma: {
        nome: "Diretoria Executiva (Gestão)",
        filhos: [
            { nome: "Tecnologia & Sistemas (TI)" },
            { nome: "Recursos Humanos (RH)" },
            { nome: "Marketing & Growth" },
            { nome: "Produção & Redação" }
        ]
    },
    swot: {
        forcas: ["Equipe jovem que fala a língua do público", "Presença forte em redes sociais", "Produtos variados (portal, podcast, vídeos, newsletter)"],
        fraquezas: ["Marca ainda em construção", "Sem verba: tudo depende de ferramentas gratuitas", "Equipe pequena para o volume de pautas"],
        oportunidades: ["Crescimento do consumo de conteúdo em vídeo curto", "Parcerias com centros acadêmicos, atléticas e coletivos", "Divulgação em murais, grupos e eventos do curso"],
        ameacas: ["Mudanças de algoritmo das redes", "Concorrência de grandes portais", "Propagação de notícias falsas"]
    },
    cronograma: [
        { periodo: "Mês 1", marco: "Lançamento do portal e da intranet" },
        { periodo: "Mês 2", marco: "Início do podcast Papo Conexão e dos vídeos curtos" },
        { periodo: "Mês 3", marco: "Campanha de lançamento \"Projeto Z\" na turma e primeira newsletter" },
        { periodo: "Mês 4", marco: "Avaliação de resultados com a turma e ajustes" },
        { periodo: "Mês 6", marco: "Apresentação final e relatório do projeto" }
    ],
    /* Custos mínimos, pensados para estudantes: quase tudo é gratuito e o
       pouco que existe é dividido entre os integrantes (rateio). Valores em R$ por mês. */
    orcamento: {
        rotuloReceita: "Rateio entre os integrantes",
        receita: 40,
        despesas: [
            { item: "Hospedagem do site (GitHub Pages)", valor: 0 },
            { item: "Fotos (Unsplash) e edição (ferramentas gratuitas)", valor: 0 },
            { item: "Gravação do podcast (celular e fone próprios)", valor: 0 },
            { item: "Domínio .com.br (opcional, cerca de R$ 40 por ano)", valor: 3.5 },
            { item: "Impressão de cartazes com QR code", valor: 25 },
            { item: "Reserva para imprevistos", valor: 11.5 }
        ]
    }
};

/* "Quem Somos" passa a mostrar missão, visão e valores */
INSTITUCIONAL["quem-somos"].html += "<p><strong>Missão:</strong> " + EMPRESA.missao + "</p>" +
    "<p><strong>Visão:</strong> " + EMPRESA.visao + "</p>" +
    "<p><strong>Valores:</strong> " + EMPRESA.valores.join(", ") + ".</p>";

/* O bloco de organograma do setor Gestão fica por conta da página (setor.js) */

/* Custos do painel da Gestão calculados a partir do orçamento acima */
(function () {
    const total = EMPRESA.orcamento.despesas.reduce((t, d) => t + d.valor, 0);
    const fmt = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    SETORES.gestao.kpis[0].valor = fmt(total);
    SETORES.gestao.kpis[1].valor = fmt(total / INTEGRANTES);
})();
