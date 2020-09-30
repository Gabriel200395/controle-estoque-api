const Produto = require('../../Models/Produtos');


module.exports = {

    async listaProduto(req, res) {
        try {
            const produto = await Produto.find({});
            return res.json({
                erro: false,
                messsge: "foi possivel listar todas as empresas conforme foi solicitado",
                produto
            })
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "não foi possivel listar as empresas"
            });
        }
    },


    async listaIdProduto(req, res) {
        try {
            const idEmpresa = await Produto.findOne({ _id: req.params.id });
            return res.json({
                erro: false,
                messsge: "foi possivel listar todos os ids das empresas conforme foi solicitado",
                idEmpresa
            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "não foi possivel listar as empresas"
            })
        }
    },


    async adicionaProduto(req, res) {
        try {
            const adicionaEmpresa = await Produto.create(req.body);
            return res.json({
                erro: false,
                message: "Empresa adicionada com sucesso",
                adicionaEmpresa

            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "Erro ao adicionar a empresa"
            })
        }
    },

    async deleteProduto(req, res) {
        try {
            await Produto.deleteOne({ _id: req.params.id });
            return res.json({
                erro: false,
                message: "Empresa excluida com sucesso"
            });
        } catch (err) {
            return res.status(400).json({
                erro: true,
                message: "Empresa não excluida com sucesso"
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
                message: "não foi possivel alterar a empresa"
            })
        }
    }

}