import './App.css';

import Cidade from './assets/cidade.jpeg';
import Condicional from './components/Condicional';
import DetalhesCarro from './components/DetalhesCarro';
import GerenciaDados from './components/GerenciaDados';
import Listas from './components/Listas';
import MostraNome from './components/MostraNome';

function App() {

  const carros = [
    {id: 1, marca: "Citroen", modelo: "C3", cor: "Preto", km: 90000},
    {id: 2, marca: "Ford", modelo: "Ka", cor: "Branco", km: 120000},
    {id: 3, marca: "Renault", modelo: "Sandero", cor: "Azul", km: 200000}
  ]

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
      {/* props */}
      <MostraNome nome='Rayssa' />
      {/* destruturing */}
      <DetalhesCarro marca='VW' modelo='Gol' cor='Vermelha' km={100000} />
      {/* loop com vetor de carros */}
      {
        carros.map((carro) => (
          <DetalhesCarro 
            key={carro.id}
            marca={carro.marca}
            modelo={carro.modelo}
            cor={carro.cor}
            km={carro.km}
        />
        ))
      }
    </div>
  );
}

export default App;
