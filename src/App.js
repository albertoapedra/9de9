import './App.css';
import {Main} from './componentes/main.js';
import data from './data/data.json';

function App() {
  return (
    <Main data={data} />
  );
}

export default App;
