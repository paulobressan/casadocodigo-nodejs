//Importando arquivo de conexão com o banco de dados
var connectionFactory = require('../infra/connectionFactory');
//Esse arquivo é o arquivo onde é definido as rotas de produtos.
module.exports = (app) => {
    //atendendo requisições e enviando respostas
    app.get('/produtos', (request, response) => {
        console.log("Listando");
        //Atribuindo a connectionFactory
        var connection = connectionFactory();

        //criando uma query e passando uma função anonima para tratar o retorno.
        connection.query('select * from livros', (err, results) => {
            //retornando um json para o navegador.
            //response.send(results);
            response.render("produtos/lista", {lista: results});
        });

        //fechando a conexão
        connection.end();
        //renderizar arquivos com o ejs, o ejs busca as views na pasta views.
       // response.render("produtos/lista");
    });
}