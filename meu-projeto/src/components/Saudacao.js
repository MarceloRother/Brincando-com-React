function Saudacao({nome}) {
    
    function geraSaudacao(algumNome) {
        return `Ola, ${algumNome}, tudo bem?`
    }
    
    return (
        <>
        {nome &&<p>{geraSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao