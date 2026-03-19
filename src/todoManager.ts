export interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

class TodoManager {
    private todos: Todo[] = [];

    constructor() {
        this.todos = [];
    }

    create(todo: Todo): Todo {
        this.todos.push(todo);
        return todo;
    }

    read(id: number): Todo | undefined {
        return this.todos.find(todo => todo.id === id);
    }

    update(id: number, updatedTodo: Partial<Todo>): Todo | null {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos[index] = { ...this.todos[index], ...updatedTodo };
            return this.todos[index];
        }
        return null;
    }

    delete(id: number): Todo[] | null {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1);
        }
        return null;
    }

    list(): Todo[] {
        return this.todos;
    }
}

export default TodoManager;

// Example usage:
// const manager = new TodoManager();
// manager.create({ id: 1, task: 'Learn TypeScript', completed: false });
// console.log(manager.list());