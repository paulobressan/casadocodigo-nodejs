//Importando as configurações servidor e invocando a, o modulo retorna uma função.
var app = require('./config/express')();

//importando as rotas de produtos
require('./app/routes/produtos')(app);

//importando rota da home
require('./app/routes/home')(app);

//configurando a porta que o servidor vai escutar.
app.listen(3000, ()=>{
    console.log("Servidor rodando");
});