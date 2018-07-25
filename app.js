//Importando as configurações servidor e invocando a, o modulo retorna uma função.
var app = require('./config/express')();

//ROTAS CARREGADO PELO LOAD
//importando as rotas de produtos
//require('./app/routes/produtos')(app);

//configurando a porta que o servidor vai escutar.
app.listen(3000, ()=>{
    console.log("Servidor rodando");
});