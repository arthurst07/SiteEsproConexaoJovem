# Publicação por todos os funcionários

Esta edição usa como base o ZIP Espro-main-v3 e preserva suas fotos, seu chat e os painéis de gestão.

## Publicar e editar

1. Abra a Área do Funcionário e entre com a conta já cadastrada em `USUARIOS`, no arquivo `SiteEspro/dados.js`.
2. Clique em **Minhas matérias · Publicar e editar**. Há também um acesso **Minhas matérias** nas páginas dos setores e do chat.
3. Clique em **Nova matéria**, preencha título, editoria, autoria, resumo e texto. Separe parágrafos com uma linha em branco. Fontes são opcionais, mas recomendadas; use `Nome | https://endereço`, uma por linha.
4. Clique em **Publicar no portal**. Todos os setores podem publicar diretamente; não há aprovação obrigatória e não há limite de uma matéria por funcionário.
5. Para alterar, abra **Minhas matérias**, clique em **Editar** e em **Salvar alterações publicadas**. A mesma publicação é atualizada sem duplicação e continua no portal. Isso funciona após sair e entrar novamente com a mesma conta, desde que os dados do navegador sejam preservados.
6. Para guardar um texto antes de publicar, use **Salvar rascunho**. **Enviar para revisão** é opcional. Salvar uma matéria já publicada como rascunho/revisão a retira do portal após confirmação.

**Importante:** a autoria que aparece no jornal pode ser um nome escolhido, mas o direito de editar pertence ao **e-mail usado no login**. Alterar o campo de autoria não transfere a matéria para outra conta.

As cinco contas existentes são por setor. Se duas pessoas usam a mesma conta, o sistema as considera o mesmo responsável. Para autoria independente, cadastre um e-mail de demonstração diferente para cada pessoa no objeto `USUARIOS`, com `senha`, `setor` e, opcionalmente, `nome`. O setor deve ser um dos cinco existentes. Não use senhas pessoais reais nesse protótipo público.

## Permissões

- TI, RH e Marketing podem criar, publicar, editar, retirar do ar e excluir suas próprias matérias, inclusive publicadas.
- Produção e Gestão também podem administrar o acervo, inclusive matérias iniciais do projeto, revisar textos e organizar destaques.
- Um funcionário comum pode ler matérias publicadas por outros, mas não editá-las nem excluí-las. Os rascunhos de outros responsáveis ficam ocultos.
- O filtro começa em **Minhas matérias**. Use **Acervo disponível** para consultar os demais textos permitidos à conta.
- Visitantes sem login podem apenas ler o portal. A página de redação exige uma sessão válida.

## Onde as publicações ficam

O projeto continua estático: as matérias ficam no armazenamento local (`cj_editorial_v1`) do navegador, no endereço e porta utilizados. Não são gravadas automaticamente no GitHub nem sincronizadas com outros aparelhos. O Firebase configurado para o chat não sincroniza as matérias.

Publicar no GitHub Pages disponibiliza o código do site, mas NÃO transforma o armazenamento local em um banco compartilhado. Para ter uma redação online usada por vários funcionários e publicações visíveis para todos os visitantes, será necessário um backend com autenticação e banco de dados.

**Backup:** Produção e Gestão podem exportar o acervo completo em JSON e importá-lo em outro navegador. A importação substitui o acervo local após confirmação. Ela aceita backups do formato editorial da versão anterior. Sessões, senhas e mensagens do chat não entram nesse arquivo. Limpar os dados do navegador apaga as edições sem backup.

Se outra aba alterar as matérias, uma gravação sobre acervo desatualizado será bloqueada; copie o texto pendente e recarregue. Se o armazenamento estiver cheio ou bloqueado, a gravação falha com aviso e o formulário permanece preenchido.

## Abrir no computador

Recomendado: execute `python iniciar.py` (ou `py iniciar.py`) na pasta do projeto, com Python 3 instalado. O site abre em `http://127.0.0.1:8080`. Mantenha o terminal aberto; Ctrl+C encerra. Também é possível servir a pasta com Live Server no VS Code ou usar o link publicado do GitHub Pages. Evite abrir os HTMLs como arquivos locais: o armazenamento e a sessão podem ser isolados por arquivo.

As contas públicas, senhas no código e verificações no navegador são uma simulação escolar, não segurança para um sistema real. A regra de edição é aplicada na interface e no módulo de gravação; quem manipula diretamente o código ou armazenamento ainda pode contorná-la.
