import PropTypes from 'prop-types'

function Item({ marca=0, ano_lancamento='Faltu a marca' }) {
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item

// Esse recurso (defaultProps e propType) está sendo depreciado para componentes funcionais e, em futuras versões principais do React, ele será removido.
// Portante, passara a ser usado a sintaxe de parametros padrao para JS = { function Item({ marca=0, ano_lancamento='Faltu a marca' }) }