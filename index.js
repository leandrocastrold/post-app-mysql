const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

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
    let formTitle = req.body.title;
    let formContent = req.body.content;
    res.send('Título: ' + formTitle + ' Conteúdo: ' + formContent);
})
no
app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})