const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
//Database Connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});

//Routes
app.get('/', (req, res) => {
    res.send("Home Page");
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})