const Empresa = require('../../Models/Empresa');
const Produto = require('../../Models/Produtos');

module.exports = {
  async listarEmpresa(req, res) {
    try {
      const listEmpresa = await Empresa.find({});
      return res.json({
        erro: false,
        listEmpresa,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel lista as empresas',
      });
    }
  },

  async listaIdEmpresa(req, res) {
    try {
      const idEmpresa = await Empresa.findOne({ _id: req.params.id });
      return res.json({
        erro: false,
        idEmpresa,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel lista o id da empresa',
      });
    }
  },

  async adiconaEmpresa(req, res) {
    try {
      const addEmpresa = await Empresa.create(req.body);
      return res.json({
        erro: false,
        mensagem: 'Empresa cadastrado com sucesso',
        addEmpresa,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel cadastrar empresa',
      });
    }
  },


  async listaProdutosEmpresa(req, res) {
    const empresaId = req.params.id
    try {
      const produtos = await Produto.find({ empresaId });
      return res.json({
        erro: false,
        mensagem: "produto listado de acordo com Empresa",
        produtos
      });
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem: " não foi possivel lista produto de acordo com Empresa",
      })
    }

  },

  async deleteEmpresa(req, res) {
    try {
      const deletEmpresa = await Empresa.findOne({ _id: req.params.id })
      await deletEmpresa.remove()
      return res.json({
        erro: false,
        mensagem: 'Empresa excluido com sucesso com sucesso',
      });
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel excluir Empresa',
      });
    }
  },

  async alteraEmpresa(req, res) {
    try {
      await Empresa.updateOne({ _id: req.params.id }, req.body);
      return res.json({
        erro: false,
        mensagem: 'Empresa modificado com sucesso',
      });
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel modificar empresa',
      });
    }
  },
};

