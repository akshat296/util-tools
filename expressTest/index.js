const express = require('express');
const fs = require('fs')
const app = express();

// for static files
app.use('/static', express.static('public'));

//Simple request time logger for a specific route
app.use('/home', (req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

// route
app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.get('/file', (req, res) => {
  fs.readFile('file.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

app.listen(3000, () => console.log('listening on port 3000!'));