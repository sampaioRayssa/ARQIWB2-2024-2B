const DetalhesCarro = ({marca, modelo, cor, km}) => {
    return(
        <div>
            <h2>Detalhes do Carro</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Modelo: {modelo}</li>
                <li>Cor: {cor}</li>
                <li>Quilometragem: {km}</li>
            </ul>
        </div>
    );
}

export default DetalhesCarro;