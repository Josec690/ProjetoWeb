const express = require('express');
const handlebars = require('express-handlebars').engine;

const app = express();


app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/consultar', (req, res) => {
    res.render('consultar');
});

app.get('/atualizar', (req, res) => {
    res.render('atualizar');
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log('Servidor Funcionando!');
});
