const express = require('express');
const app = express();
const port = 3000;

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

app.use(express.static('/public'))

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



//Routes

app.get('/', (req, res) => {
    Post.findAll({order : [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts: posts});    
    })    
    
});

app.get('/post', (req, res) => {
    res.render('form');
})

app.post('/add', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.redirect('/');
    }).catch((erro) => {
        res.send('Um erro ocorreu: ' + erro.message)
    });
})

app.get('/delete/:id', (req, res) => {
    Post.destroy({ where: { 'id': req.params.id } })
        .then(() => {
            res.send('Post deletado')
        }).catch((erro) => {
            res.send("Um erro ocorreu: " + erro.message);
        })
})

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
})