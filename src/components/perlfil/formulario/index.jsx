import { useState, useEffect } from "react"

const Formulario = () => {

    let [valorA, mudaValorA] = useState(0);
    let [valorB, mudaValorB] = useState(0);
    let [valorC, mudaValorC] = useState(0);

    const renderizaResultado = () => {
        const media = (valorA + valorB  + valorC) / 3

        if (media >= 7){
            return(
                <p>você foi aprovado</p>
            )
        }else{
            return(
                <p>você não foi aprovado</p>
            )
        }
    }
    return(
        <form>
            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            
            <input type="number" placeholder="Nota mareria A" onChange={evento => mudaValorA(parseint(evento.target.value))} />
            <input type="number" placeholder="Nota mareria B" onChange={evento => mudaValorB(parseint(evento.target.value))}/>
            <input type="number" placeholder="Nota mareria C" onChange={evento => mudaValorC(parseint(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario