import './App.css';

import Cidade from './assets/cidade.jpeg';
import Condicional from './components/Condicional';
import GerenciaDados from './components/GerenciaDados';
import Listas from './components/Listas';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React 2</h1>
      {/* Imagem em public */}
      <img src="/paisagem.jpeg" alt="Paisagem natural" />
      {/* Imagem em assets */}
      <img src={Cidade} alt="Cidade" />
      {/* Gerenciar dados */}
      <GerenciaDados />
      {/* Listas */}
      <Listas />
      {/* Condicional */}
      <Condicional />
    </div>
  );
}

export default App;
