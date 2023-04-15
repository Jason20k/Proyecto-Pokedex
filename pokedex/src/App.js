
import './App.css';
import { ProviderPokemon } from './Components/Contex/ProviderPokemon';
import ListPokemon from './Components/ListPokemon/ListPokemon';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';
import { TypeFilter } from './Components/TypeFilter/TypeFilter';

function App() {

  return (
  <ProviderPokemon >
    <div className="App bg-warning">
      <Navbar />
      <header className="App-header">
        <Search />
        <TypeFilter />
        <ListPokemon />
      </header>
    </div>
  </ProviderPokemon>
  );
}

export default App;
