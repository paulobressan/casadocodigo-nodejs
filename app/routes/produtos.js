//Esse arquivo é o arquivo onde é definido as rotas de produtos.
module.exports = (app) => {
    //atendendo requisições e enviando respostas
    app.get('/produtos', (request, response) => {
        console.log("Listando");
        //renderizar arquivos com o ejs, o ejs busca as views na pasta views.
        response.render("produtos/lista");
    });
}