import './App.css';
import MeuComponente from './components/MeuComponente';

function App() {

  const valor = 10;

  const tituloVermelho = true;

  return (
    <div className="App">
     {/* CSS global */}
     <h1>React com CSS</h1>
     {/* CSS de componente */}
     <MeuComponente />
     <p>Parágrafo do Componente App</p>
     {/* CSS inline */}
     <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        CSS inline
      </p>
      <p style={valor >= 10 ? {color: "purple"} : {color: "pink"}}>
        CSS inline dinâmico
      </p>
      <p style={valor < 10 ? {color: "purple"} : {color: "pink"}}>
        CSS inline dinâmico
      </p>
      {/* Classes dinâmicas */}
      <h2 className={tituloVermelho ? "tituloVermelho" : "titulo"}>
        Usando classes dinâmicas
      </h2>
      
    </div>
  );
}

export default App;
