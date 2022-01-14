const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.listen(3000, console.log('Server is running on port 3000.'))

app.get('/', (req, res) => {
    let resultimc = ''
    res.render('content', {resultimc: resultimc})
})

app.post('/', (req, res) => {
    let resultimc = ''
    if(req.body.altura !== '' && req.body.peso !== '')
    {
        let altura = req.body.altura
        if( altura.includes(',') ) altura = altura.replace(',', '.')
        altura = parseFloat(altura)

        let peso = parseFloat(req.body.peso)
        let imc = peso / ( Math.pow(altura, 2) )

        resultimc = {estado: '', valor: imc.toFixed(1), imagem: ''}

        if(imc < 18.5)
        {
            resultimc.estado = 'Abaixo do peso'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/5559/5559962.png'
        }
        else if(imc < 25)
        {
            resultimc.estado = 'Peso ideal'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/5559/5559928.png'
        }
        else if(imc < 30)
        {
            resultimc.estado = 'Levemente acima do peso'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/5559/5559940.png'
        }
        else if(imc < 35)
        {
            resultimc.estado = 'Obesidade grau I'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/2307/2307829.png'
        }
        else if(imc < 40)
        {
            resultimc.estado = 'Obesidade grau II (severa)'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/2843/2843563.png'
        }
        else
        {
            resultimc.estado = 'Obesidade grau III (mórbida)'
            resultimc.imagem = 'https://cdn-icons-png.flaticon.com/512/5571/5571435.png'
        }
    }
        
    res.render('content', {resultimc: resultimc})
})