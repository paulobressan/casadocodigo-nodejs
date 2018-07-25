module.exports = (app) =>{
    app.get('/categorias', (resquest, response)=>{
        response.render('categorias/lista', {categoria: 'ola categoria'})
    })
}