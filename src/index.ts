// src/index.ts

import { addTodo, deleteTodo, listTodos } from './todo';

// Example usage of todo functions

const main = () => {
    // Adding todos
    const todo1 = addTodo('Buy groceries');
    const todo2 = addTodo('Walk the dog');

    // Listing todos
    console.log('Current Todos:');
    listTodos();

    // Removing a todo
    deleteTodo(todo1.id);

    // Listing todos again
    console.log('Todos after removal:');
    listTodos();
};

main();
