const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/rolldice', (req, res) => {
  res.render('rolldice.ejs');
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});