//LEMBRANDO QUE OS REQUIRE ESTÃO SENDO GERENCIADO PELO EXPRESS-LOAD
//Esse arquivo é o arquivo onde é definido as rotas de produtos.
module.exports = (app) => {
    //atendendo requisições e enviando respostas
    app.get('/produtos', (request, response) => {
        console.log("Listando");

        //Criando uma instancia da classe ConnectionFactory buscando-a com o express-load
        //e logo em seguida executando o metodo que cria uma conexão.
        var connection = new app.infra.ConnectionFactory().createConnection();

        //separando a responsabilidade do banco para uma classe DAO.
        //instanciando a classe e buscando-a pelo express-load
        var produtoDao = new app.dao.ProdutoDao(connection);

        produtoDao.lista((err, results) => {
            response.format({
                html: () => {
                    //retornando um json para o navegador.
                    //response.send(results);
                    response.render("produtos/lista", { lista: results });
                },
                json: () => {
                    response.json(results);
                }
            });

        });

        //fechando a conexão
        connection.end();
        //renderizar arquivos com o ejs, o ejs busca as views na pasta views.
        // response.render("produtos/lista");
    });

    //responde o formulario de produtos
    app.get("/produtos/form", (resquest, response) => {
        response.render('produtos/form');
    })

    app.post("/produtos", (request, response) => {
        //capturando valor enviado
        var produto = request.body;
        console.log(produto);

        var connection = new app.infra.ConnectionFactory().createConnection();
        var produtoDao = new app.dao.ProdutoDao(connection);
        produtoDao.salva(produto, (err, result) => {
            response.redirect('/produtos')
        });
    })
}