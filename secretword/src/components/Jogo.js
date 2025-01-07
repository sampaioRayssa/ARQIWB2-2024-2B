import { useRef, useState } from 'react';
import './Jogo.css';

const Jogo = ({verificarLetra, palavraSelecionada, categoriaSelecionada,
    letras, letrasAdivinhadas, letrasErradas, tentativas, pontuacao}) => {

    const [letra, setLetra] = useState("");
    const letraInputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        verificarLetra(letra);
        setLetra("");
        letraInputRef.current.focus();
    }
    return (
        <div className="jogo">
            <p className="pontos">
                <span>Pontuação: {pontuacao}</span>
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="dica">
                Dica sobre a palavra: <span>{categoriaSelecionada}</span>
            </h3>
            <p>Você ainda tem {tentativas} tentativa(s).</p>
            <div className="containerPalavra">
                {letras.map((letra, i) => (
                    letrasAdivinhadas.includes(letra) ? (
                        <span key={i} className="letra">{letra}</span>
                    ) : (
                        <span key={i} className="quadradoVazio"></span>
                    )
                ))}
            </div>
            <div className="containerLetra">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="letra" id="letra" maxLength="1" required 
                    onChange={(e) => setLetra(e.target.value)} 
                    value={letra}
                    ref={letraInputRef}/>
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="containerLetrasErradas">
                <p>Letras já utilizadas:</p>
                {letrasErradas.map((letra, i) => (
                    <span key={i}>{letra}, </span>
                ))}
            </div>
        </div>
    )
}

export default Jogo;