import './App.scss';
import Home from './Components/Home/Home';
import Quotes from './Components/Quotes/Quotes';
import ShoppingList from './Components/ShoppingList/ShoppingList';

function App() {
  return (
    <div className="App">
      <Home />
      <Quotes />
      <ShoppingList />
    </div>
  );
}

export default App;
