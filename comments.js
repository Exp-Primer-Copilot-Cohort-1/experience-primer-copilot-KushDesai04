// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

// Create app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Comments
const commentsByPostId = {};

// Routes
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create comment
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex'); // Generate random ID
  const { content } = req.body; // Get content from request body

  // Get comments for post
  const comments = commentsByPostId[req.params.id] || [];

  // Add new comment to comments
  comments.push({ id: commentId, content });

  // Update comments
  commentsByPostId[req.params.id] = comments;

  // Send response
  res.status(201).send(comments);
});

// Listen on port
app.listen(4001, () => {
  console.log('Listening on port 4001');
});