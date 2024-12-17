import "./MeuComponente.css";

const MeuComponente = () => {
    return(
        <div>
            <h1>Meu Componente</h1>
            <p>Parágrafo do Componente</p>
            <p className="paragrafo">
                Parágrafo usando classe CSS
            </p>
        </div>
    );
}

export default MeuComponente;