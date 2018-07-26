//Criando uma classe e exportando-a, essa classe recebe no construtor uma
module.exports = () => class ProdutoDao{
    constructor(connection)
    {
        this._connection = connection;
    }

    lista(callback){
        this._connection.query('select * from livros', callback);
    }

    salva(produto, callback){
        //o driver do mysql aceita uma sintaxe um pouco diferente onde vamos conseguir setar o que vamos inserir
        //e colocar ? como parametro que é um obj, logo em seguida o parametro 
        this._connection.query(`insert into livros set ?`, produto, callback);
    }
}