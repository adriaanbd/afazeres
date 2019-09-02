import TodoItem from './components/TodoItem';

const todo = new TodoItem('Todo 1', 'Something to do', 'a date');

const getTodoAttr = (todoInstance) => [
  todoInstance.getTitle(),
  todoInstance.getDescription(),
  todoInstance.getDueDate(),
  todoInstance.getPriority(),
];

getTodoAttr(todo);
