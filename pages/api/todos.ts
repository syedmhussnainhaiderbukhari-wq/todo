import { NextApiRequest, NextApiResponse } from 'next';

interface Todo {
  id?: number;
  title?: string;
  task?: string;
  completed?: boolean;
}

let todos: Todo[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Return the list of todos
        res.status(200).json(todos);
    } else if (req.method === 'POST') {
        // Add a new todo
        const { todo } = req.body;
        if (!todo) {
            return res.status(400).json({ message: 'Todo is required' });
        }
        todos.push(todo);
        res.status(201).json({ message: 'Todo added', todo });
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}