# Como colocar o site no ar (link grátis com GitHub Pages)

O site é estático (HTML, CSS e JS), então dá para publicar de graça.

1. Suba esta pasta para o repositório do grupo no GitHub (todos os arquivos, inclusive `index.html` da raiz e `.nojekyll`).
2. No GitHub, abra o repositório: **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main** e pasta **/ (root)**. Clique em **Save**.
4. Espere 1 a 2 minutos. O endereço aparece na mesma tela, no formato:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
   (a página inicial redireciona para `SiteEspro/index.html`).

Alternativa sem GitHub: arraste a pasta inteira em https://app.netlify.com/drop

## Depois de publicar
- Teste no celular e no computador.
- Se alguma foto não aparecer, troque o código dela em `SiteEspro/dados.js` (objeto `IMAGENS`).
- Cada mudança no GitHub atualiza o site sozinho.

## Atenção ao abrir o site direto do computador (sem publicar)
No **Chrome/Edge** funciona normalmente. No **Firefox**, cada arquivo local é tratado como um site separado e o login não passa do portal para as páginas de setor/chat. Por isso, para apresentar, **use o link publicado**.

## Publicação de matérias pela redação
A publicação do código no GitHub Pages não publica automaticamente para outros visitantes as matérias criadas no navegador. O editor da Área do Funcionário usa armazenamento local. Veja `REDACAO.md` para autoria por e-mail, backup e limites da simulação.
