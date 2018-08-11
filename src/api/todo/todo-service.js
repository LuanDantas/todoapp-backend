const Todo = require('./todo')

// Define os métodos/ações que serão habilitadas na API Restfull
Todo.methods(['get', 'post', 'put', 'delete'])

// Atualiza as opções para após um update o Node retornar o valor de registro atualizado
// e também, diz ao node para sempre verificar as validações dos campos, mesmo durante um update.
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo