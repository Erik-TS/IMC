const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const calcStatus = require(__dirname + '/calcImc.js')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.listen(3000, console.log('Server is running on port 3000.'))

app.get('/', (req, res) => {
    let resultimc = ''
    res.render('content', {resultimc: resultimc})
})

app.post('/', (req, res) => {
    let resultimc = {}
    if(req.body.altura !== '' && req.body.peso !== '')
    {
        let peso = req.body.peso
        let altura = req.body.altura
        
        if(altura.includes(',')) altura = altura.replace(',', '.')
        if(peso.includes(',')) peso = peso.replace(',', '.')

        altura = parseFloat(altura)
        peso = parseFloat(peso)

        resultimc = {estado: '', valor: 0, imagem: ''}

        let aux = calcStatus(peso, altura)
        resultimc = {estado: aux[0], valor: aux[1].toFixed(1), imagem: aux[2]}
    }
        
    res.render('content', {resultimc: resultimc})
})