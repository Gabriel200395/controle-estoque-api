const Usuario = require('../../Models/Usuarios');

module.exports = {
  async listarUsuarios(req, res) {
    try {
      const usuarios = await Usuario.find({});
      return res.json({
        erro: false,
        usuarios,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel lista os usuários',
      });
    }
  },

  async listaId(req, res) {
    try {
      const idUsuario = await Usuario.findOne({ _id: req.params.id });
      return res.json({
        erro: false,
        idUsuario,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel lista os id dos usuários',
      });
    }
  },

  async adiconaUsuario(req, res) {
    try {
      const usuario = await Usuario.create(req.body);
      return res.json({
        erro: false,
        mensagem: 'Usuário cadastrado com sucesso',
        usuario,
      });
    } catch (err) {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel cadastrar usuário',
      });
    }    
  },

  async deleteUser(req, res) {
    try {
      await Usuario.deleteOne({ _id: req.params.id});
      return res.json({
        erro: false,
        mensagem: 'Usuário excluido com sucesso com sucesso',
      });
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel excluir usuário',
      });
    }
  },

  async alteraUsuario(req, res) {
    try {
      await Usuario.updateOne({ _id: req.params.id }, req.body);
      return res.json({
        erro: false,
        mensagem: 'Usuário modificado com sucesso',
      });
    } catch {
      return res.status(400).json({
        erro: true,
        mensagem: 'Não foi possivel modificar usuário',
      });
    }
  },
};

