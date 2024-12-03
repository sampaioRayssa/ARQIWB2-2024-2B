const TemplateExpressions = () => {
    const nome = "Rayssa";
    const dados = {
        idade: 17,
        profissao: "estudante" 
    }


    return(
        <div>
            <h2>Olá, {nome}! Seja bem-vinda(o)!</h2>
            <h2>Você é {dados.profissao} e tem {dados.idade} anos.</h2>
            <p>{console.log("Usando o React!")}</p>
        </div>
    );
}

export default TemplateExpressions;
