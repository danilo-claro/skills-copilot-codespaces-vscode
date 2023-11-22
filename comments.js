// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var Post = require('../models/post');

// GET /posts/:postId/comments
router.get('/', function(req, res, next) {
  res.send('GET /posts/:postId/comments');
});

// POST /posts/:postId/comments
router.post('/', function(req, res, next) {
  res.send('POST /posts/:postId/comments');
});

// GET /posts/:postId/comments/:commentId
router.get('/:commentId', function(req, res, next) {
  res.send('GET /posts/:postId/comments/:commentId');
});

// PUT /posts/:postId/comments/:commentId
router.put('/:commentId', function(req, res, next) {
  res.send('PUT /posts/:postId/comments/:commentId');
});

// DELETE /posts/:postId/comments/:commentId
router.delete('/:commentId', function(req, res, next) {
  res.send('DELETE /posts/:postId/comments/:commentId');
});

module.exports = router;