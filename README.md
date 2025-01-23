# To-Do List Application

Este projeto é uma aplicação simples de lista de tarefas (**To-Do List**) desenvolvida com **HTML**, **CSS** e **JavaScript**, permitindo adicionar, concluir e excluir tarefas com suporte ao armazenamento local.

## Funcionalidades

- **Adicionar tarefas**.
- **Marcar tarefas como concluídas**.
- **Excluir tarefas**.
- **Persistência de dados com `localStorage`**.

---

## Estrutura do Projeto

### **HTML**
Define a estrutura básica, incluindo:

- Campo de entrada para tarefas.
- Botão de adição.
- Lista para exibição das tarefas.

### **CSS**
Responsável pelo estilo visual:

- **Centralização da lista**.
- **Efeitos de `hover` e `active`**.
- **Estilo para tarefas concluídas**.

### **JavaScript**
Lógica da aplicação:

- `addTask()`: **Adiciona tarefas**.
- `deleteTask(index)`: **Remove tarefas**.
- `taskDone(index)`: **Marca/desmarca tarefas como concluídas**.
- `recarregarTarefar()`: **Carrega tarefas do `localStorage`**.
- `showTask()`: **Renderiza tarefas e atualiza o `localStorage`**.
