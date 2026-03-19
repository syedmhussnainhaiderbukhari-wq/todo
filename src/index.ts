// src/index.ts

import { addTodo, removeTodo, listTodos } from './todoFunctions';

// Example usage of todo functions

const main = () => {
    // Adding todos
    addTodo('Buy groceries');
    addTodo('Walk the dog');

    // Listing todos
    console.log('Current Todos:');
    listTodos();

    // Removing a todo
    removeTodo('Buy groceries');

    // Listing todos again
    console.log('Todos after removal:');
    listTodos();
};

main();
