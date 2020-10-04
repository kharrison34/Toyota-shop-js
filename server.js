const express = require('express');
const app = express();

app.get('/index.html', function (req, res) {
  res.send('Hello World');
});

app.listen(5000);

console.log('server on 5000');
