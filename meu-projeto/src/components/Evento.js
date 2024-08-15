import { useState } from "react"

function Evento() {

    function meuEvento() {
        console.log(`Opa, fui ativado! ${contador}`)
    }

    const [contador, setContador] = useState(0)

    function handClick() {
        setContador(contador + 1)
        meuEvento()
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={handClick}>Ativar!</button>
        </div>
    )
}

export default Evento