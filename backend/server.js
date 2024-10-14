const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Load data from JSON file
const dataFilePath = path.join(__dirname, 'blogs.json');
let data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(data);
});

// Get post by ID
app.get('/api/posts/:id', (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id));
  res.json(user);
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const newUser = { id: data.length + 1, ...req.body };
  data.push(newUser);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2)); // Save to JSON file
  res.status(201).json(newUser);
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  const index = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    data[index] = { id: data[index].id, ...req.body };
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2)); // Save to JSON file
    res.json(data[index]);
  } else {
    res.status(404).send('Post not found');
  }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const index = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedUser = data.splice(index, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2)); // Save to JSON file
    res.json(deletedUser);
  } else {
    res.status(404).send('Post not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});