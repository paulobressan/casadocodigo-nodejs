//ARQUIVO DE CONFIGURAÇÃO 
//exportando um modulo, ou seja exportar o modulo de configuração
//para exportar temos que atribuir ao module.exports uma função
// module.exports = () => {
//     //Importando o express e invocando o express
//     let app = require('express')();
//     app.set('view engine', 'ejs');
//     return app;
// }

//OU


//O mesmo conceito porem não precisamos carregar o express a todo momento que for chamado as configurações
//Importando o express e invocando o express
let app = require('express')();
//Criando uma variavel no express para a utilização do ejs
app.set('view engine', 'ejs');
//configurar o caminho de onde estão as views
app.set('views', './app/views');
module.exports = () => {
    return app;
}