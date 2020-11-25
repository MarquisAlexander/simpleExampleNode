const express = require('express');

const app = express();

app.get('/first', function (request, response) {
    response.send('Hello world');
  });

app.listen(3333);