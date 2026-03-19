import { Command } from 'commander';
import { addTodo, listTodos, completeTodo, deleteTodo } from './todo';

const program = new Command();

program
  .version('1.0.0')
  .description('CLI for Todo App');

program
  .command('add <task>')
  .description('Add a new todo')
  .action((task: string) => {
    addTodo(task);
    console.log(`Added todo: ${task}`);
  });

program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = listTodos();
    console.log('Todos:');
    todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.title} - ${todo.completed ? '✔️' : '❌'}`);
    });
  });

program
  .command('complete <index>')
  .description('Mark a todo as completed')
  .action((index: string) => {
    completeTodo(Number(index));
    console.log(`Completed todo at index: ${index}`);
  });

program
  .command('delete <index>')
  .description('Delete a todo')
  .action((index: string) => {
    deleteTodo(Number(index));
    console.log(`Deleted todo at index: ${index}`);
  });

program.parse(process.argv);