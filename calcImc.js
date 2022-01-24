module.exports = status

function status(peso, altura){

    let imc = peso / ( Math.pow(altura, 2) )
    let resposta = []
    let status, link

    if(imc < 18.5)
    {
        status = 'Abaixo do peso'
        link = 'https://cdn-icons-png.flaticon.com/512/5559/5559962.png'
    }
    else if(imc < 25)
    {
        status = 'Peso ideal'
        link = 'https://cdn-icons-png.flaticon.com/512/5559/5559928.png'
    }
    else if(imc < 30)
    {
        status = 'Levemente acima do peso'
        link = 'https://cdn-icons-png.flaticon.com/512/5559/5559940.png'
    }
    else if(imc < 35)
    {
        status = 'Obesidade grau I'
        link = 'https://cdn-icons-png.flaticon.com/512/2307/2307829.png'
    }
    else if(imc < 40)
    {
        status = 'Obesidade grau II (severa)'
        link = 'https://cdn-icons-png.flaticon.com/512/2843/2843563.png'
    }
    else
    {
        status = 'Obesidade grau III (mórbida)'
        link = 'https://cdn-icons-png.flaticon.com/512/5571/5571435.png'
    }

    resposta.push(status, imc, link)
    return resposta
}