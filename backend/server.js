const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    description: "A deep dive into closures in JavaScript and how to use them effectively.",
    image: "https://via.placeholder.com/150",
    author: "Alice Johnson"
  },
  {
    id: 2,
    title: "React vs. Vue: Which One to Choose?",
    description: "A comparative analysis of React and Vue.js to help you make an informed decision.",
    image: "https://via.placeholder.com/150",
    author: "Bob Smith"
  },
  {
    id: 3,
    title: "CSS Grid: A Comprehensive Guide",
    description: "Learn how to use CSS Grid to create complex web layouts.",
    image: "https://via.placeholder.com/150",
    author: "Charlie Brown"
  },
  {
    id: 4,
    title: "Node.js: The Complete Beginner's Guide",
    description: "Everything you need to know to get started with Node.js.",
    image: "https://via.placeholder.com/150",
    author: "Diana Prince"
  },
  {
    id: 5,
    title: "Top 10 JavaScript Frameworks in 2024",
    description: "An overview of the most popular JavaScript frameworks and libraries.",
    image: "https://via.placeholder.com/150",
    author: "Ethan Hunt"
  },
  {
    id: 6,
    title: "The Future of Web Development",
    description: "Trends and predictions for the next generation of web development.",
    image: "https://via.placeholder.com/150",
    author: "Fiona Apple"
  },
  {
    id: 7,
    title: "Building RESTful APIs with Express",
    description: "Learn how to create RESTful APIs using Express.js.",
    image: "https://via.placeholder.com/150",
    author: "George Lucas"
  },
  {
    id: 8,
    title: "Introduction to TypeScript",
    description: "A beginner's guide to understanding and using TypeScript.",
    image: "https://via.placeholder.com/150",
    author: "Hannah Montana"
  },
  {
    id: 9,
    title: "Responsive Web Design: Best Practices",
    description: "Key principles for creating responsive and user-friendly web designs.",
    image: "https://via.placeholder.com/150",
    author: "Ian Malcolm"
  },
  {
    id: 10,
    title: "Data Visualization with D3.js",
    description: "How to create beautiful data visualizations using D3.js.",
    image: "https://via.placeholder.com/150",
    author: "Julia Roberts"
  },

];



// Get all data
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
  res.status(201).json(newUser);
});

// Update a post
app.put('/api/posts/:id', (req, res) => {
  const index = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    data[index] = { id: data[index].id, ...req.body };
    res.json(data[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
  const index = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedUser = data.splice(index, 1);
    res.json(deletedUser);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
