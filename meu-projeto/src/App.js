import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Marcelo'

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Ola React</h1>
      <p>Meu primeiro App</p>
      <p>Ola, {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld/>
    </div>
  );
}

export default App;
