//ARQUIVO DE CONFIGURAÇÃO 
//Importando o express
let express = require('express');
//Importando o express-load
let load = require('express-load');

module.exports = () => {
    //invocando o express
    var app = express();
    //Criando uma variavel no express para a utilização do ejs
    app.set('view engine', 'ejs');
    //configurar o caminho de onde estão as views
    app.set('views', './app/views');

    //invocando o load e carregar dentro de app.
    //Tudo que tiver dentro de routes vai ser carregado em app.
    load('routes', {cwd: 'app'}) //VAI CARREGAR ROUTES A PARTIR DE APP.
        .then('infra') //DEPOIS QUE CARREGOU AS ROUTES CARREGAR A INFRA. PORQUE É UMA DEPENDENCIA.
        .into(app)

    return app;
}