// Arquivo responsável por fazer o mapeamento do ODM
const restful = require('node-restful')
const mongoose = restful.mongoose

// Criar o Schema
const todoSchema = new mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, require: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

// Exporta o Schema que foi criado acima
module.exports = restful.model('Todo', todoSchema)