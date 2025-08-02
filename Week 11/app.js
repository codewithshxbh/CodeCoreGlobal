const express = require('express');
const { generateToken, authenticate } = require('./week11-auth');
const app = express();
app.use(express.json());

const users = [{ username: 'admin', password: '123' }];
const todos = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');
  const token = generateToken({ username });
  res.json({ token });
});

app.get('/todos', authenticate, (req, res) => {
  res.json(todos);
});

app.post('/todos', authenticate, (req, res) => {
  const todo = { id: todos.length + 1, task: req.body.task, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.listen(3000, () => {
  console.log('Week 11 auth API running on http://localhost:3000');
});
