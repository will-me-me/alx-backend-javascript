const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, '127.0.0.1', () => console.log('Server Started'));

module.exports = app;