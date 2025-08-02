const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./week10-model');
const app = express();

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/week10todos');

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.status(201).json(newTodo);
});

app.listen(3000, () => {
  console.log('MongoDB connected and server running on http://localhost:3000');
});
