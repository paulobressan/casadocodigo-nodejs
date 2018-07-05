//Importando as configurações servidor e invocando a, o modulo retorna uma função.
var app = require('./config/express')();
//importando as rotas de produtos
var rotasprodutos = require('./app/routes/produtos')(app);

//configurando a porta que o servidor vai escutar.
app.listen(3000, ()=>{
    console.log("Servidor rodando");
});