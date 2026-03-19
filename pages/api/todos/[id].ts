import { NextApiRequest, NextApiResponse } from 'next';

interface Todo {
  id: number;
  title?: string;
  task?: string;
  completed?: boolean;
}

const todos: Todo[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PATCH') {
    const todoToUpdate = todos.find((todo: Todo) => todo.id === Number(id));
    if (todoToUpdate) {
      // Update logic here
      res.status(200).json({ message: 'Todo updated', todo: todoToUpdate });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else if (req.method === 'DELETE') {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === Number(id));
    if (todoIndex !== -1) {
      // Remove logic here
      todos.splice(todoIndex, 1);
      res.status(200).json({ message: 'Todo deleted' });
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else {
    res.setHeader('Allow', ['PATCH', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}