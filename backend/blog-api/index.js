const express = require('express');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/posts', postsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
