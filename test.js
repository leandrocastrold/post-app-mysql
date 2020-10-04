const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', '12345', {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
    .then(() => {
        console.log("Conectado ao Banco de dados com sucesso!")
    })
    .catch((erro) => {
        console.log("Erro de conexão: " + erro.message);
    });
   
