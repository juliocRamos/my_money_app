const mongoose = require('mongoose')

// A api de promise do mongoose está depreciada... sendo assim
// utilizo a parte de Promises específica do próprio Node.
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' informado não é válido para o atributo '{PATH}'"