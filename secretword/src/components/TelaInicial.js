import './TelaInicial.css'

const TelaInicial = ({iniciarJogo}) => {
    return (
        <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={iniciarJogo}>Começar jogo</button>
        </div>
    )
}

export default TelaInicial;