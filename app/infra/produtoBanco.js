module.exports = () => {
    this.lista = (connection, callback) => {
        //criando uma query e passando uma função anonima para tratar o retorno.
        connection.query('select * from livros', callback);
    }
    return this;
}