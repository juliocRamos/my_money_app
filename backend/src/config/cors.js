module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    
    // Este middleware só adiciona cabeçalhos na requisição... tenho que
    // chamar o próximo para enviar uma resposta para a mesma
    next()
}