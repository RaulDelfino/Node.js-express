const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render('pages/index');
})
app.get('/painel', (req, res) => {
    res.render('pages/painel');
})
app.get('/pets', (req, res) => {
    res.render('pages/pets');
})
app.get('/contatos', (req, res) => {
    res.render('pages/contatos');
})
app.get('/vet', (req, res) => {
    res.render('pages/vet');
})
app.get('/agenda', (req, res) => {
    res.render('pages/agenda');
})


app.listen(5050)
console.log('rodando')
