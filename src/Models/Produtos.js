const mongoose = require('mongoose')


const produtoSchema = new mongoose.Schema({

    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    descricao: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },

    imagem: {
        type: String,
        required: true
    },
    
    produto: {
        type: String,
        required: true
    },
},
    {
        timestamps: true,
    });


const Produto = mongoose.model('Produto', produtoSchema);

module.exports = Produto;
