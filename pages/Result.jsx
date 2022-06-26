function Result(props) {
        
    if(props.status !== '' && props.imc !== ''){
        return(
            <div className='text-center'>
                <h1>{props.status}</h1>
                <h2>{parseFloat(props.imc).toFixed(1)}</h2>
                <img className='h-25 w-25' src={props.link} alt=""></img>
            </div>
        )
    }
    else return <></>
}

export default Result