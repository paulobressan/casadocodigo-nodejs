//importando driver do mysql
var mysql = require('mysql');

//O load-express carrega os modulo e invoca-o automaticamente, então quando a aplicação subir vai ser criado a conexão
//Para resolver isso e usar a conexão somente quando realmente precisa, vamos encapsular a função
//dentro de outra função e retornar um função encapsulada, quando o express-load invola ele vai invocar somente a encapsulação.
module.exports = () => {
    return () => {
        //Criando e configurando uma conexão
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2cnbrf4642',
            database: 'casadocodigo'
        });
    }
}