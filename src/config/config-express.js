const express = require('express')
const app = express();
const cors = require('cors');
const usuarios = require('../app/routes/usuarios');
const produtos = require('../app/routes/produtos'); 

app.use(express.json());
app.use(cors());
app.use(produtos);
app.use(usuarios);


module.exports = app;