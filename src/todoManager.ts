class TodoManager {
    constructor() {
        this.todos = [];
    }

    create(todo) {
        this.todos.push(todo);
        return todo;
    }

    read(id) {
        return this.todos.find(todo => todo.id === id);
    }

    update(id, updatedTodo) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos[index] = { ...this.todos[index], ...updatedTodo };
            return this.todos[index];
        }
        return null;
    }

    delete(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            return this.todos.splice(index, 1);
        }
        return null;
    }

    list() {
        return this.todos;
    }
}

// Example usage:
// const manager = new TodoManager();
// manager.create({ id: 1, task: 'Learn TypeScript', completed: false });
// console.log(manager.list());