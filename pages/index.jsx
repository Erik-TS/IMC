import Form from './Form'
import Result from './Result'
import {useState} from 'react'

function getIMC(weight, height){

    let imc
    weight === '' && height === '' ? imc = 0 : imc = weight / ( Math.pow( height, 2 ) )
    let status, link
    let IMCreturn = [status, imc, link]

    if(imc < 18.5)
    {
        IMCreturn[0] = 'Under weight'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/5559/5559962.png'
    }
    else if(imc < 25)
    {
        IMCreturn[0] = 'Ideal weight'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/5559/5559928.png'
    }
    else if(imc < 30)
    {
        IMCreturn[0] = 'Slightly overweight'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/5559/5559940.png'
    }
    else if(imc < 35)
    {
        IMCreturn[0] = 'Obesity grade I'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/2307/2307829.png'
    }
    else if(imc < 40)
    {
        IMCreturn[0] = 'Obesity grade II (severe)'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/2843/2843563.png'
    }
    else if(imc => 40)
    {
        IMCreturn[0] = 'Obesity grade III (morbid)'
        IMCreturn[2] = 'https://cdn-icons-png.flaticon.com/512/5571/5571435.png'
    }
    else{
        IMCreturn[0] = 'Invalid values'
    }

    return IMCreturn
}

export default function(){

    const [result, setResult] = useState({
        status: '',
        imc: '',
        link: ''
    })
    
    function handleResult(height, weight){
        height  = !isNaN(height) && parseFloat(height)
        weight = !isNaN(weight) && parseFloat(weight)
        const [status, imc, link] = getIMC(weight, height)
        setResult({
            status: status,
            imc: imc,
            link: link
        })
    }
    
    return(
        <>
            <div className="App">
                <Form loadResult={handleResult} />
                <Result link={result.link} status={result.status} imc={result.imc} />
            </div>
            <footer className="fixed-bottom">
                <div className="text-center px-auto">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a>, <a href="" title="surang">surang</a>, <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> and <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </footer>
        </>
    )
}