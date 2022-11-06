import logo from './logo.svg';
import './App.css';
import { PlotlyGraphFromAPI } from './Components/plotly';
import { PlotlyClientSide } from './Components/plotly-client-side';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <br/>       
        <PlotlyGraphFromAPI /> 
        <br/>
        <PlotlyClientSide />       
      </header>      
    </div>
  );
}

export default App;
