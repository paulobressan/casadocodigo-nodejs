//importando driver do mysql
var mysql = require('mysql');
module.exports = () => {
    //Criando e configurando uma conexão
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '2cnbrf4642',
        database: 'casadocodigo'
    });
}