# Exercício Avaliativo: Fundamentos de React com Vite

**Instruções de Entrega:**

*   **Onde:** Submeter no AVA um arquivo **README.md** ou **README.txt**.
*   **Conteúdo do arquivo:** Nomes dos integrantes do grupo, o contexto escolhido, o link do repositório público no GitHub e o histórico de commits.
*   **Configuração:** Projeto criado com **Vite**, versionado via Git.

---

## Opções de Contexto (Escolha UM)

### Contexto A: Dashboard de Gestão de Atividades

Interface voltada para a organização de tarefas pessoais ou profissionais.

*   **Requisitos de Negócio:** Exibir uma lista de tarefas. Cada tarefa possui título, categoria, nível de prioridade e status (concluído ou pendente).
*   **Renderização Condicional:**
    *   Tarefas com prioridade "Alta" devem receber uma estilização visual de alerta via CSS Modules.
    *   Exibir um ícone ou etiqueta de "Urgente" apenas se a tarefa for de alta prioridade e ainda não tiver sido concluída.
*   **Comunicação:** Passar uma Arrow Function via props que, ao ser acionada em um botão no item da lista, exiba uma mensagem com a descrição detalhada daquela tarefa.

### Contexto B: Vitrine de Produtos Tech

Interface de uma loja virtual focada em hardware ou dispositivos inteligentes.

*   **Requisitos de Negócio:** Exibir uma vitrine de produtos. Cada produto possui nome, preço, imagem (vinda da pasta assets) e status de estoque.
*   **Renderização Condicional:**
    *   Caso o produto esteja fora de estoque, o botão de compra deve ser substituído por uma mensagem de "Indisponível" ou apresentar um estilo visual desabilitado.
    *   Se o produto custar acima de um valor determinado por você, exibir um selo de "Frete Grátis".
*   **Comunicação:** Passar uma Arrow Function via props que, ao clicar no produto, registre o nome do produto selecionado.

---

## Critérios de Avaliação

*   **Organização:** Estrutura de arquivos e nomes de componentes coerentes.
*   **Domínio de Props:** Passagem correta de dados e funções entre componentes.
*   **CSS Modules:** Aplicação correta de classes modulares e manipulação de estilos condicionais.
*   **Uso de Assets:** Importação correta e exibição das imagens salvas localmente.
*   **Git:** Histórico de commits que demonstra a evolução do trabalho da dupla/grupo. Devem ser realizados pelo menos dois commits: o primeiro deve ser realizado após a criação do projeto.
