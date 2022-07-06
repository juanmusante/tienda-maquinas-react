import './App.css';
import NavBar from './Components/NavBar.js';
import ItemListContainer from './Containers/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo = "HOLA MUNDO 👋🏻!!! ItemListContainer"/>
    </div>
  );
}
export default App;