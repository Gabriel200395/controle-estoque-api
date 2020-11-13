const express = require('express')
const app = express();
const cors = require('cors');
const empresa = require('../app/routes/empresa');
const produtos = require('../app/routes/produtos'); 

app.use(express.json());
app.use(cors());
app.use(produtos);
app.use(empresa);


module.exports = app;