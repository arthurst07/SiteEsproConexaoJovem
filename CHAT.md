# Chat da equipe — entrega final

Abra pela Área do Funcionário, pelas páginas dos setores ou pela redação.

## Usar na apresentação

1. Entre com uma conta do setor.
2. Abra Chat da equipe.
3. Preencha seu nome, escolha Tarefa, Dúvida ou Aviso e escreva a mensagem.
4. Clique em Enviar. Ctrl+Enter também envia.
5. Tarefas podem ser concluídas e dúvidas podem ser marcadas como respondidas; é possível reabri-las.
6. Use os filtros Todas, Tarefas, Dúvidas, Avisos e Só pendentes.
7. Cada conta pode apagar suas próprias mensagens. A Gestão pode apagar qualquer mensagem, após confirmação.

## Configuração entregue

`CHAT_CONFIG.firebaseUrl` está vazio. As últimas 200 mensagens ficam no mesmo navegador e endereço; não aparecem em outro aparelho. Elas permanecem após recarregar. Use uma única máquina para a apresentação de hoje.

O chat avisa quando não consegue salvar e preserva o texto de uma tentativa de envio que falhou. Mensagens não entram no backup editorial de matérias.

## Integração online existente

O código mantém a integração opcional com Firebase Realtime Database para um grupo que já tenha um banco configurado. Ela não foi ativada nesta entrega, não sincroniza as matérias do jornal e não foi validada contra um banco real nesta sessão.

Para uma operação compartilhada, o banco precisa ser configurado pelo responsável, com autenticação e regras adequadas. As contas estáticas do site não autenticam no Firebase. Não publique um banco com leitura e escrita abertas como se ele fosse uma área protegida de funcionários.

Para hoje, não é necessário configurar nenhum serviço novo: demonstre o modo local conforme APRESENTACAO.md.
