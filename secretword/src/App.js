import { useCallback, useEffect, useState } from "react";

// CSS
import './App.css';

// dados
import {listaDePalavras} from "./dados/palavras";

// Componentes
import TelaInicial from './components/TelaInicial';
import Jogo from "./components/Jogo";
import FimJogo from "./components/FimJogo";

const estagios = [
  { id: 1, nome: "inicio" },
  { id: 2, nome: "jogo" },
  { id: 3, nome: "fim" },
];

const quantidadeTentativas = 3;

function App() {
  const [estagioJogo, setEstagioJogo] = useState(estagios[0].nome);
  const [palavras] = useState(listaDePalavras);

  const [palavraSelecionada, setPalavraSelecionada] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [letras, setLetras] = useState([]);

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(quantidadeTentativas);
  const [pontuacao, setPontuacao] = useState(0);
  
  const selecionarPalavraECategoria = useCallback(() => {
    // selecionar categoria
    const categorias = Object.keys(palavras);
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    console.log(categoria);

    // selecionar palavra dentro da categoria
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)];

    return {palavra, categoria};
  }, [palavras]);

  const iniciarJogo = useCallback(() => {
    limparLetras();

    const {palavra, categoria} = selecionarPalavraECategoria();

    // criar um vetor de letras
    let letrasDaPalavra = palavra.split("");
    letrasDaPalavra = letrasDaPalavra.map((l) => l.toLowerCase());

    setPalavraSelecionada(palavra);
    setCategoriaSelecionada(categoria);
    setLetras(letrasDaPalavra);

    setEstagioJogo(estagios[1].nome);
  }, [selecionarPalavraECategoria]);

  const verificarLetra = (letra) => {
    const letraNormalizada = letra.toLowerCase();

    // verificar se a letra já foi utilizada
    if(letrasAdivinhadas.includes(letraNormalizada) || letrasErradas.includes(letraNormalizada)){
      return;
    }
    
    // adicionar letra em adivinhadas ou decrementar tentativas
    if(letras.includes(letraNormalizada)){
      setLetrasAdivinhadas((actualLetrasAdivinhadas) => [
        ...actualLetrasAdivinhadas,
        letraNormalizada
      ])
    }else {
      setLetrasErradas((actualLetrasErradas) => [
        ...actualLetrasErradas,
        letraNormalizada
      ])

      setTentativas((actualTentativas) => actualTentativas - 1);
    }
  };
  
  const limparLetras = () => {
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
  };

  // verificar derrota
  useEffect(() => {
    if(tentativas <= 0){
      // reiniciar todos os estados
      limparLetras();
      setEstagioJogo(estagios[2].nome);
    }
  }, [tentativas]);

  // verificar vitória
  useEffect(() => {
    const letrasUnicas = [...new Set(letras)];

    if(letrasAdivinhadas.length === letrasUnicas.length){
      setPontuacao((actualPontuacao) => actualPontuacao += 100);
      iniciarJogo();
    }

  }, [letrasAdivinhadas, letras, iniciarJogo]);

  const reiniciar = () => {
    setPontuacao(0);
    setTentativas(quantidadeTentativas);
    setEstagioJogo(estagios[0].nome);
  };

  return (
    <div className="App">
      {estagioJogo === "inicio" && <TelaInicial iniciarJogo={iniciarJogo} />}
      {estagioJogo === "jogo" && <Jogo 
        verificarLetra={verificarLetra}
        palavraSelecionada={palavraSelecionada}
        categoriaSelecionada={categoriaSelecionada}
        letras={letras}
        letrasAdivinhadas={letrasAdivinhadas}
        letrasErradas={letrasErradas}
        tentativas={tentativas}
        pontuacao={pontuacao}
      />}
      {estagioJogo === "fim" && <FimJogo reiniciar={reiniciar} pontuacao={pontuacao}/>}
    </div>
  );
}

export default App;
