const express  = require('express');

const app = express();
// use html
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Index page' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login page' });
});
// connect server
app.listen(3001);

