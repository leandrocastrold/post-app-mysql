const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//Database Connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});

//Routes
app.get('/post', (req, res) => {
    res.render('form');
})

app.post('/add', (req, res) => {
    res.send('Post published!');
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})