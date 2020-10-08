const Produto = require('../../Models/Produtos');


module.exports = {

    async listaProduto(req, res) {
        try {
            const produto = await Produto.find({});
            return res.json({
                erro: false,
                messsge: "foi possivel listar todas as produtos conforme foi solicitado",
                produto
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "não foi possivel listar as produtos"
            });
        }
    },


    async listaIdProduto(req, res) {
        try {
            const idProduto = await Produto.findOne({ _id: req.params.id });
            return res.json({
                erro: false,
                messsge: "foi possivel listar todos os ids das produtos conforme foi solicitado",
                idProduto
            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "não foi possivel listar as produtos"
            })
        }
    }, 


    
    async adicionaProduto(req, res) {
        try {
            const produtoEmpresa = await Produto.create(req.body);
            return res.json({
                erro: false,
                message: "produto adicionada com sucesso",
                produtoEmpresa

            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "Erro ao adicionar a produto"
            })
        }
    },    

    async deleteProduto(req, res) {
        try {
            await Produto.deleteOne({_id: req.params.id });
            return res.json({
                erro: false,
                message: "produto excluida com sucesso"
            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "produto não excluida com sucesso"
            })
        }
    },

    async updateProduto(req, res) {
        try {
            await Produto.updateOne({ _id: req.params.id }, req.body);
            return res.json({
                erro: false,
                message: "alteração feita com sucesso"
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "não foi possivel alterar a produto"
            })
        }
    }

}