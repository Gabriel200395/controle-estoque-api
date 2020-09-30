
const app = require('./src/config/config-express')
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Usuarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("conexão com sucesso ao banco de dados do mongo");
}).catch((erro) => {
    console.log("conexão não realizada com sucesso ao banco de dados do mongo");
});

app.listen(8080, () => {
    console.log("servidor rodando na porta 8080: http://localhost:8080/")
})
