import { useEffect, useState } from 'react'

function Content(props) {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    function handleHeight(event) {
        let value = event.target.value
        value.includes(',') && value.indexOf(',') !== (value.length - 1) ? (value = value.replace(',', '.')) : value = value.replace(',', '')
        const floatValue = parseFloat(value)
        setHeight(floatValue)
    }

    function handleWeight(event) {
        let value = event.target.value
        value.includes(',') && value.indexOf(',') !== (value.length - 1) ? (value = value.replace(',', '.')) : value = value.replace(',', '')
        const floatValue = parseFloat(value)
        setWeight(floatValue)
    }

    useEffect(() => {
        document.addEventListener('keydown', (d) => {
            d.key === 'Enter' && props.loadResult(height, weight)
        })
    })

    return(
        <div className="form-imc">
            <div className='list-group'>
                <div className={'row mx-sm-1 mx-md-3 mx-lg-auto'}>
                    <div className='col'>
                        <input onChange={handleHeight} className='form-control' type={'number'} name="height" placeholder="Height" />
                    </div>
                </div>
                <div className={'row mx-sm-1 mx-md-3 mx-lg-auto'}>
                    <div className='col'>
                        <input onChange={handleWeight} className='form-control' type={'number'} name="weight" placeholder="Weight" />
                    </div>
                </div>
                <div className='row mx-auto'>
                    <div className='col'>
                        <button onClick={ e => {
                            e.preventDefault()
                            props.loadResult( height, weight )
                        }} className='btn btn-dark'>Calculate</button>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Content