const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});

const Posting = sequelize.define('postings', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})


sequelize.authenticate()
    .then(() => {
        console.log("Connection successful!")
    })
    .catch((erro) => {
        console.log("Connection error: " + erro.message);
    });
   
//Posting.sync({force: true});