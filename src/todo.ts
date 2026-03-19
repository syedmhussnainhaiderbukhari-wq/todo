// Todo Functions

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const storageKey = 'todos';

const getStoredTodos = (): Todo[] => {
    const todos = localStorage.getItem(storageKey);
    return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos: Todo[]) => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
};

export const addTodo = (title: string): Todo => {
    const todos = getStoredTodos();
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    return newTodo;
};

export const listTodos = (): Todo[] => {
    return getStoredTodos();
};

export const getTodo = (id: number): Todo | undefined => {
    return getStoredTodos().find(todo => todo.id === id);
};

export const updateTodo = (id: number, title: string): Todo | null => {
    const todos = getStoredTodos();
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = title;
        saveTodos(todos);
        return todo;
    }
    return null;
};

export const completeTodo = (id: number): boolean => {
    const todos = getStoredTodos();
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = true;
        saveTodos(todos);
        return true;
    }
    return false;
};

export const deleteTodo = (id: number): boolean => {
    let todos = getStoredTodos();
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
    return todos.length < initialLength;
};

export const getCompletedCount = (): number => {
    return getStoredTodos().filter(todo => todo.completed).length;
};

export const getPendingCount = (): number => {
    return getStoredTodos().filter(todo => !todo.completed).length;
};

export const clearCompleted = (): void => {
    const todos = getStoredTodos();
    const pendingTodos = todos.filter(todo => !todo.completed);
    saveTodos(pendingTodos);
};