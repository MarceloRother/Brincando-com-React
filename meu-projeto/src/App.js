import './App.css'
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderizacao de Listas</h1>
      <OutraLista itens={ meusItens }/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
