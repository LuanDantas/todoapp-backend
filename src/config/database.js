// MongoDB config file

/*
    Serve tanto para fazer o mapeamento dos objetos JavaScripts para os documentos que vão para o Mongo
    como ele também serve para abrir/fechar conexões com o Mongo.
*/ 
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo')