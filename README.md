A simple blog application with a React frontend, Node.js/Express backend, and MySQL database.

Features
Create, view, edit, and delete blog posts
Posts are stored in a MySQL database
Setup Instructions
Requirements
Node.js installed
MySQL installed
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/KAGI0433/blog-post.git
cd blog-project
Backend setup:

Go to the backend folder:
bash
Copy code
cd backend/blog-api
Install dependencies:
bash
Copy code
npm install
Set up your MySQL database in db.js:
javascript
Copy code
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kutlwano@12',
    database: 'blog'
});
Start the server:
bash
Copy code
node index.js
Frontend setup:

Go to the frontend folder:
bash
Copy code
cd frontend
Install dependencies:
bash
Copy code
npm install
Start the React app:
bash
Copy code
npm start
Database setup:

Run these SQL commands in MySQL:

sql
Copy code
CREATE DATABASE blog;
USE blog;

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
API Endpoints
GET /api/posts - Get all posts
POST /api/posts - Create a post
PUT /api/posts/:id - Update a post
DELETE /api/posts/:id - Delete a post
License
