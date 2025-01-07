import './FimJogo.css';

const FimJogo = ({reiniciar, pontuacao}) => {
    return (
        <div>
            <h1>Fim jogo!</h1>
            <h2>A sua pontuação é: <span>{pontuacao}</span> </h2>
            <button onClick={reiniciar}>Finalizar jogo</button>
        </div>
    )
}

export default FimJogo;