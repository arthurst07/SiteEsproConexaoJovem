# Chat da equipe

O chat fica em `SiteEspro/paginas/chat.html` e só abre para quem fez login na Área do Funcionário.
Cada mensagem é uma **Tarefa**, uma **Dúvida** ou um **Aviso**. Tarefas e dúvidas podem ser marcadas como concluídas/respondidas. Cada pessoa apaga as próprias mensagens, e a Gestão apaga qualquer uma.

## Dois modos

| Modo | Quando | Onde as mensagens ficam |
|---|---|---|
| **Teste** (padrão) | `firebaseUrl` vazio em `dados.js` | Só no navegador de quem usa. Serve para mostrar como funciona num único computador. |
| **Compartilhado** | `firebaseUrl` preenchido | Num banco online gratuito (Firebase). Todos veem as mesmas mensagens, em aparelhos diferentes. |

Para a apresentação à turma, use o modo **compartilhado**.

## Ligar o modo compartilhado (uns 5 minutos, grátis)

1. Entre em https://console.firebase.google.com com uma conta Google e clique em **Criar um projeto** (pode desativar o Google Analytics).
2. No menu **Build / Criação**, abra **Realtime Database** e clique em **Criar banco de dados**. Escolha qualquer localização e comece em **modo de teste**.
3. Na aba **Dados**, copie o endereço que aparece no topo, parecido com `https://nome-do-projeto-default-rtdb.firebaseio.com`.
4. Abra `SiteEspro/dados.js`, procure `CHAT_CONFIG` e cole o endereço:
   ```js
   const CHAT_CONFIG = {
       firebaseUrl: "https://nome-do-projeto-default-rtdb.firebaseio.com"
   };
   ```
5. Na aba **Regras** do Realtime Database, cole as regras abaixo e clique em **Publicar** (o modo de teste expira em 30 dias; estas regras não expiram e exigem os campos básicos de cada mensagem):
   ```json
   {
     "rules": {
       "chat": {
         ".read": true,
         ".write": true,
         "$id": {
           ".validate": "newData.hasChildren(['autor','setor','dono','tipo','texto','ts'])"
         }
       }
     }
   }
   ```
6. Publique o site de novo (veja `PUBLICAR.md`) e abra `paginas/chat.html` logado: o selo no topo deve mostrar **Chat compartilhado (online)**.

## Limites (importante)
- O site é estático, então o login **só esconde as páginas**. No modo compartilhado, quem souber o endereço do banco consegue ler e escrever nele. Para a atividade isso é aceitável, mas **não coloque dados pessoais ou sensíveis** no chat.
- Para apagar tudo antes da apresentação: no Firebase, aba **Dados**, passe o mouse em `chat` e clique no X.
- O chat atualiza sozinho a cada 4 segundos.
