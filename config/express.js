//ARQUIVO DE CONFIGURAÇÃO 
//Importando o express
let express = require('express');
//Importando o express-load
let load = require('express-load');
//utilizando o body parser para preencher o corpo das requisições
let bodyParser = require('body-parser');

module.exports = () => {
    //invocando o express
    var app = express();
    //Criando uma variavel no express para a utilização do ejs
    app.set('view engine', 'ejs');
    //configurar o caminho de onde estão as views
    app.set('views', './app/views');

    //antes de ser carregado os arquivos temos que usar no express o body parser aplicado no request
    //O use são os middlewares que antes que a requisição chega é feito alguma coisa
    //No caso é mapeado os valores enviado atravez do corpo da requisição para o body.
    //O meotodo urlencoded é a meneira que é enviado os dados
    //O extend interpreta os formularios mais completos
    app.use(bodyParser.urlencoded({extended: true}));

    //invocando o load e carregar dentro de app.
    //Tudo que tiver dentro de routes vai ser carregado em app.
    load('routes', {cwd: 'app'}) //VAI CARREGAR ROUTES A PARTIR DE APP.
        .then('infra') //DEPOIS QUE CARREGOU AS ROUTES CARREGAR A INFRA. PORQUE É UMA DEPENDENCIA.
        .then('dao')
        .into(app)

    return app;
}