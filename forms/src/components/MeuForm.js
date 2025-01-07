import { useState } from 'react';
import './MeuForm.css';

export const MeuForm = ({ usuario }) => { // com chaves!!!

    const [nome, setNome] = useState(usuario ? usuario.nome : "");
    const [email, setEmail] = useState(usuario ? usuario.email : "");
    const [bio, setBio] = useState(usuario ? usuario.bio : "");
    const [papel, setPapel] = useState(usuario ? usuario.papel : "");
    const [genero, setGenero] = useState(usuario ? usuario.genero : "");
    const [noticias, setNoticias] = useState(usuario ? usuario.noticias : "");

    const generos = ["Masculino", "Feminino", "Outro", "Prefiro não dizer"];

    const handleNome = (e) => {
        setNome(e.target.value);
    }

    //console.log(nome);
    //console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário.");
        console.log(nome, email, bio, papel, genero, noticias);
        {/* limpar o formulário */ }
        setNome('');
        setEmail('');
        setBio('');
        setPapel("");
        setGenero("")
        setNoticias("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome"
                        onChange={handleNome} value={nome} />
                </div>
                {/* label envolvendo um input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" id="email" placeholder='Digite seu e-mail'
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                {/* textarea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" id="bio" placeholder="Descrição do usuário"
                        onChange={(e) => setBio(e.target.value)} value={bio}></textarea>

                </label>
                {/* select */}
                <label>
                    <span>Função no sistema:</span>
                    <select name="papel" id="papel" onChange={(e) => setPapel(e.target.value)} value={papel}>
                        <option value="usuario">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </label>
                {/* radio buttons */}
                <div>
                    <span>Informe seu gênero:</span>
                    {generos.map(g => (
                        <label key={g}>
                            <input
                                type="radio"
                                value={g}
                                checked={genero === g}
                                onChange={(e) => setGenero(e.target.value)}
                            />
                            {g}
                        </label>
                    ))}
                    {/*
                    <label>
                        <input type="radio" value="masculino" checked={genero === 'masculino'}
                            onChange={(e) => setGenero(e.target.value)} />
                        Masculino
                    </label>
                    <label>
                        <input type="radio" value="feminino" checked={genero === 'feminino'}
                            onChange={(e) => setGenero(e.target.value)} />
                        Feminino
                    </label>
                    <label>
                        <input type="radio" value="outro" checked={genero === 'outro'}
                            onChange={(e) => setGenero(e.target.value)} />
                        Outro
                    </label>
                    <label>
                        <input type="radio" value="nao_dizer" checked={genero === 'nao_dizer'}
                            onChange={(e) => setGenero(e.target.value)} />
                        Prefiro não dizer
                    </label>
                    */}
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={noticias} onChange={(e) => setNoticias(!noticias)} value={noticias} />
                        Receber notícias da empresa.
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MeuForm;
