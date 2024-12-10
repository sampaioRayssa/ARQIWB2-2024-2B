import { useState } from "react";

const Listas = () => {
    
    const [lista] = useState(["Adriana","Juliana","Mariana"]);

    return(
        <div>
            <ul>
                {
                    lista.map( (item, i) => (
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        </div>

    );
}
export default Listas;