# Espro

Atividade do conteúdo Gestores, onde a sala deve criar uma empresa (fictícia) e gerenciar ela, gerando produtos.

Nossa sala está com a empresa **Conexão Jovem**, um jornal digital desenvolvido de jovens para jovens.

Nossa colaboração para este trabalho é um site, disponibilizado nestes arquivos.

## Estrutura do projeto

```
SiteEspro/
├── index.html        (portal público + intranet)
├── script.js         (portal: categorias, busca, edição Weekly e login)
├── dados.js          (conteúdo: notícias, produtos, contas e painéis dos setores)
├── paginas/
│   ├── gestao.html
│   ├── marketing.html
│   ├── producao.html
│   ├── rh.html
│   ├── ti.html
│   ├── chat.html     (chat da equipe, só funcionários)
│   ├── chat.js
│   └── setor.js      (monta as páginas de setor)
└── css/
    └── style.css
```

## Como abrir
Use `python iniciar.py` (ou `py iniciar.py`) e abra `http://127.0.0.1:8080`, ou use Live Server / o link publicado. Evite abrir como arquivo local para não isolar a sessão entre páginas.

## Como editar o conteúdo
- **Criar, publicar e editar matérias:** Área do Funcionário → Minhas matérias. Todos os funcionários podem publicar diretamente e editar seus próprios textos publicados. Veja `REDACAO.md`.
- **Conteúdo inicial, produtos e textos institucionais:** `SiteEspro/dados.js`
- **Painéis dos setores (KPIs, projetos, checklist):** `SETORES` em `dados.js`
- **Contas da intranet:** `USUARIOS` em `dados.js`

## Intranet (simulação)
Login por e-mail; o setor é descoberto automaticamente.
E-mails: conexaojovemti@, conexaojovemrh@, conexaojovemgestao@, conexaojovemmkt@, conexaojovemprod@ (todos @gmail.com). As senhas estão em `dados.js`.
A Gestão consegue abrir a página de qualquer setor; os demais só abrem a própria.

> Importante: como o site é estático, as senhas ficam visíveis no código-fonte. Serve para a simulação da atividade; num sistema real a validação seria feita em um servidor.

## Publicação
Veja `PUBLICAR.md` (passo a passo do GitHub Pages).

## Conteúdo fictício
Matérias, números dos painéis e dados da empresa (missão, SWOT, orçamento...) são exemplos. Troque pelo que o grupo definiu em `SiteEspro/dados.js` (`NOTICIAS`, `EMPRESA`, `SETORES`). Fotos: Unsplash (códigos em `IMAGENS`); a matéria 10 (BookTok) ainda não tem foto.

## Chat e apresentação
- `CHAT.md`: como ligar o chat compartilhado (Firebase, grátis).
- `APRESENTACAO.md`: checklist e roteiro de apresentação.
- Custos da Gestão: orçamento mínimo para estudantes (`EMPRESA.orcamento` em `dados.js`); o número de integrantes está em `INTEGRANTES`.

## Redação e permissões
Veja `REDACAO.md`. A permissão pertence ao e-mail da conta; contas compartilhadas por setor compartilham também a autoria. As publicações ficam no navegador, não no GitHub nem no Firebase do chat.

## Entrega final
Use APRESENTACAO.md como roteiro principal. A Weekly abre uma seleção do acervo, sem coleta ou envio de e-mail. Podcast e vídeos permanecem planejados; o Instagram não está conectado. O chat entregue funciona no mesmo navegador. Não é preciso configurar serviços para apresentar localmente.
