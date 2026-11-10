# Conexão Jovem — edição revisada

Projeto escolar de jornal digital e simulação de empresa. Preserva as editorias, as cores e a organização visual do trabalho original.

## Abrir o site

1. Extraia todo o ZIP para uma pasta.
2. Com Python 3 instalado, execute `python iniciar.py` dentro dessa pasta. No Windows, também é possível usar `py iniciar.py`.
3. O navegador abrirá `http://127.0.0.1:8080`. Mantenha o terminal aberto durante o uso. Ctrl+C encerra.

Alternativa no VS Code: sirva a pasta SiteEspro com Live Server. Use sempre o mesmo endereço, porta e navegador para recuperar as edições locais.

Abrir index.html com dois cliques pode mostrar o portal, mas não é recomendado: os navegadores tratam o armazenamento de arquivos locais de formas diferentes, o que pode impedir o compartilhamento da sessão entre as páginas.

O servidor incluído é apenas para uso local, não um serviço de hospedagem. Se a porta 8080 estiver ocupada, encerre a outra instância ou utilize `python -m http.server 8081 --bind 127.0.0.1 --directory SiteEspro` e acesse http://127.0.0.1:8081. Uma porta diferente tem armazenamento separado; importe o backup nela.

## Área do funcionário

Abra Área do Funcionário e consulte “Contas de demonstração”. As contas originais foram mantidas:

| Setor | E-mail | Senha de demonstração |
| --- | --- | --- |
| Produção | conexaojovemprod@gmail.com | Samuel |
| Gestão | conexaojovemgestao@gmail.com | CArlosLarissa |
| Marketing | conexaojovemmkt@gmail.com | Isis |
| RH | conexaojovemrh@gmail.com | Michelle |
| TI | conexaojovemti@gmail.com | Rayane |

Essas senhas são públicas, já estão no código e não protegem dados reais. Não reutilize senhas pessoais. A identificação é por setor, não por pessoa.

Clique em **Abrir redação · Criar e editar matérias**. O mesmo acesso aparece nas páginas dos setores.

## Fluxo editorial

- Todos os setores podem criar rascunhos, editar seus próprios textos não publicados e enviá-los para revisão.
- Produção e Gestão veem todos os rascunhos, editam o acervo e publicam. Os demais setores podem ler matérias publicadas.
- Autoria, editoria, resumo e texto são obrigatórios. Separe parágrafos com uma linha em branco.
- Fontes: uma por linha, no formato `Nome da referência | https://endereco`. Pelo menos uma é necessária para publicar. Uma URL válida não prova a veracidade do texto: a checagem é responsabilidade da redação.
- Prévia permite conferir a leitura antes de salvar. HTML é exibido como texto.
- **Salvar rascunho** não publica. **Enviar para revisão** aguarda Produção ou Gestão. **Publicar no portal** publica imediatamente.
- Para editar uma publicação, use Editar, faça as mudanças e clique em Publicar no portal. Salvar a publicação como rascunho ou revisão a retira do portal após confirmação.
- Destaques são escolhidos por Produção ou Gestão. Os quatro mais recentemente atualizados entre os marcados aparecem no topo; as demais matérias aparecem na grade ou nas editorias.
- Exclusões pedem confirmação e removem a matéria do acervo local. Não existe lixeira: exporte um backup antes.
- Alterações em outra aba são sinalizadas; uma gravação com acervo desatualizado é recusada para evitar sobrescrever trabalho. Copie o texto pendente e recarregue a redação.

## Salvar, compartilhar e apresentar

Os dados ficam no armazenamento local do navegador, no mesmo endereço e porta. Não são gravados nos arquivos JS e não são sincronizados pela internet. Outra pessoa, computador, navegador ou endereço não verá automaticamente as mudanças. Uma cópia do ZIP contém a edição inicial, não suas alterações locais.

Produção e Gestão podem clicar em **Exportar backup** para baixar um JSON com todo o acervo. Para levar a apresentação a outro computador, leve o ZIP e esse JSON. No outro computador, abra o site, entre na Produção ou Gestão e use **Importar backup**.

A importação valida o formato e pede confirmação antes de substituir TODO o acervo, inclusive rascunhos. Não mescla registros. Exporte primeiro o acervo atual se quiser preservá-lo. O backup não inclui sessões, senhas nem checklist dos setores; inclui autoria e responsável dos textos. Limites: 500 matérias e importação de até 5 MB.

Recarregar ou sair da conta não apaga as matérias. Limpar os dados do site no navegador apaga matérias e checklists. Se o armazenamento estiver bloqueado ou cheio, a redação avisa e mantém o formulário preenchido. Não feche o formulário com alterações ainda não salvas.

Para restaurar os textos iniciais, primeiro exporte o acervo que deseja guardar e depois remova a chave `cj_editorial_v1` nas ferramentas do navegador, ou limpe os dados do endereço. Não há restauração silenciosa sobre dados existentes.

## O que está funcionando

Portal, editorias, busca sem distinção de acentos, destaques dinâmicos, leitura de matérias com fontes, edição Weekly para leitura, conteúdo institucional, login demonstrativo, painéis de setor, checklist local, redação com criação/edição/exclusão, prévia, fluxo editorial e backup.

Os 16 textos iniciais são guias e exemplos editoriais da edição escolar. Não são reportagens de última hora. As datas iniciais identificam essa edição demonstrativa; os textos criados e editados na redação recebem data real de atualização.

Newsletter é uma seleção para leitura no site, sem coleta de e-mail. Podcast e vídeos curtos estão identificados como propostas em desenvolvimento; não há publicações de áudio ou vídeo fictícias. Os indicadores e projetos dos setores são ilustrativos. Não há métricas de audiência reais, envios de e-mail, contratação, monitoramento ou serviços de nuvem integrados.

Não há dependências externas de fontes ou ícones: o site e a redação funcionam offline depois de extraídos, com o servidor local. Links das referências precisam de internet.

## Estrutura

- `SiteEspro/index.html`: portal e acesso à intranet.
- `SiteEspro/dados.js`: textos iniciais, contas e painéis dos setores.
- `SiteEspro/editorial.js`: validação e armazenamento compartilhado das matérias.
- `SiteEspro/script.js`: portal, busca, categorias, leitura e intranet.
- `SiteEspro/acessibilidade.js`: foco e teclado dos diálogos.
- `SiteEspro/paginas/redacao.html` e `redacao.js`: gerenciamento editorial.
- `SiteEspro/paginas/setor.js`: painéis dos setores.
- `SiteEspro/css/style.css`: visual e responsividade.
- `iniciar.py`: servidor local opcional, usando apenas a biblioteca padrão do Python.

Para uma operação real com várias pessoas, será necessário um servidor com banco de dados, autenticação e permissões verificadas no servidor. Este projeto foi mantido como uma demonstração portátil para o curso.

## Verificação realizada

Testes automatizados em Chromium verificaram: abertura e fechamento de diálogos com foco de teclado; leitura Weekly; login; criação de rascunho; exigência de fonte para publicar; recusa de URL executável; publicação e edição refletidas no portal; texto HTML exibido sem execução; exportação e reimportação de backup; recusa de backup inválido; persistência de checklist; restrições de publicação/importação e de acesso entre setores; envio de pauta do RH para revisão; layout em 320, 390, 768, 1024 e 1440 pixels; menu móvel; conflito de edições em abas distintas; falha de gravação preservando formulário; aviso de dados corrompidos; portal e Weekly com acervo vazio. Nenhum erro de JavaScript ou resposta HTTP de erro foi observado no fluxo principal.
