import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo = "HOLA MUNDO 👋🏻!!! ItemListContainer"/>
    </div>
  );
}
export default App;