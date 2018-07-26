//importando driver do mysql
var mysql = require('mysql');

module.exports = () => class ConnectionFactory{
    createConnection(){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2cnbrf4642',
            database: 'casadocodigo'
        });
    }
}