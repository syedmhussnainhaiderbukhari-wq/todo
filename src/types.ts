// src/types.ts

// Interface representing a single Todo item
export interface Todo {
    id: number;  // Unique identifier for the todo item
    title: string;  // Title of the todo item
    completed: boolean;  // Completion status of the todo item
    createdAt: Date;  // Date when the todo item was created
    updatedAt?: Date;  // Date when the todo item was last updated (optional)
}

// Interface representing the todo manager
export interface TodoManager {
    todos: Todo[];  // Array of todo items
    addTodo(todo: Todo): void;  // Method to add a new todo item
    removeTodo(id: number): void;  // Method to remove a todo item by id
    toggleCompletion(id: number): void;  // Method to toggle completion status of a todo item
}