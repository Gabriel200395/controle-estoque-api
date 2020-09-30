const mongoose = require('mongoose')
const Produtos = require('../Models/Produtos')

const usuarioSchema = new mongoose.Schema({

    empresa: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
     },
    {
        timestamps: true,
    });

    usuarioSchema.virtual('Produtos', {
        ref:'Produto', 
        localField: '_id',
        foreignField: 'usuarioId'  
    })

const Usuario = mongoose.model('Usuario', usuarioSchema); 

module.exports = Usuario;
