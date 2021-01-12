const express = require('express');
const port = process.env.PORT || 5000;
const path = require('path');
const app = express();
const router = express.Router();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/aboutme', router.get('/'), (req, res) => {
  res.render('aboutme');
});

app.use('/contactme', router.get('/'), (req, res) => {
  res.render('contactme');
})

app.use('/mywork', router.get('/'), (req, res) => {
  res.render('mywork');
});

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(port, () => {
  console.log('Yoo this is ready!')
});