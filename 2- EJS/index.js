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
    let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render('rolldice.ejs' , {diceVal});
});

app.get('/insta/:username', (req, res) => {
    let {username} = req.params;
    const instaData = require('./data.json');
    const data = instaData[username]
    console.log(data);
  res.render('insta.ejs'  , {data});
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});