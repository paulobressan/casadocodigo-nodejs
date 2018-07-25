//LEMBRANDO QUE OS REQUIRE ESTÃO SENDO GERENCIADO PELO EXPRESS-LOAD
//Esse arquivo é o arquivo onde é definido as rotas de produtos.
module.exports = (app) => {
    //atendendo requisições e enviando respostas
    app.get('/produtos', (request, response) => {
        console.log("Listando");
        //Atribuindo a connectionFactory
        //Quando é carregado pelo express-load ele disponibiliza a instancia atravez de caminho do diretório.
        var connection = app.infra.connectionFactory();
        //separando a responsabilidade do banco para um modulo.
        var produtoBanco = app.infra.produtoBanco;

        produtoBanco.lista(connection, (err, results) => {
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