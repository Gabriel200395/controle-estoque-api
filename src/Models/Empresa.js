const mongoose = require('mongoose')
const Produtos = require('../Models/Produtos')

const empresaSchema = new mongoose.Schema({

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

    empresaSchema.virtual('Produtos', {
        ref:'Produto', 
        localField: '_id',
        foreignField: 'empresaId'  
    })

    empresaSchema.pre('remove', async function(next) {
        await Produtos.deleteMany({ empresaId: this._id });
        next();
    });
      
      
const Empresa = mongoose.model('Empresa', empresaSchema); 

module.exports = Empresa;
