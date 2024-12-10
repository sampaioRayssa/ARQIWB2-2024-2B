import { useState } from "react";

const GerenciaDados = () =>{
    let dado = 10;

    const [numero, setNumero] = useState(20);

    return(
        <div>
            <h2>Número: {dado}</h2>
            <button onClick={() => dado = 15}>Alterar número</button>
            <h2>Número 2: {numero}</h2>
            <button onClick={() => setNumero(numero + 1)}>Alterar número 2</button>
        </div>

    );
}

export default GerenciaDados;