import logo from './logo.svg';
import './App.css';
import { PlotlyGraphFromAPI } from './Components/plotly';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <br/>       
        <PlotlyGraphFromAPI />        
      </header>      
    </div>
  );
}

export default App;
