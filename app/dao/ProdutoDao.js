//Criando uma classe e exportando-a, essa classe recebe no construtor uma
module.exports = () => class ProdutoDao{
    constructor(connection)
    {
        this._connection = connection;
    }

    lista(callback){
        this._connection.query('select * from livros', callback);
    }
}