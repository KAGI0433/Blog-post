const express = require('express');
const bodyParser = require('body-parser');
const postsRoute = require('./routes/posts');
const cors = require('cors');


const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/posts', postsRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
