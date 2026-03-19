import fs from 'fs';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const FILE_PATH = 'todos.json';

export const saveTodos = (todos: Todo[]) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
};

export const loadTodos = () => {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    }
    return [];
};