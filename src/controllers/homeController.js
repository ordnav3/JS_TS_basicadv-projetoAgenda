const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const metodo = new Contato
    const contatos = await metodo.buscaContatos();
    res.render('index', { contatos });
}
