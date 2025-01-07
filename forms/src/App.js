import './App.css';
import MeuForm from './components/MeuForm';

function App() {
  return (
    <div className="App">
      <h1>Formulários</h1>
      {/* criação de forms */}
      <MeuForm usuario={{nome:"Fernando", email:"fernando@ifsp.edu.br", bio: "Professsor", papel: "administrador",
        genero: "masculino", noticias: true}}/>
    </div>
  );
}

export default App;
