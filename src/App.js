import Weather from "./Weather"
import './Weather.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Nigeria"/>
      <footer>
        This project was created by Nwakaego Glory Nwaekpe and it is {""}
      <a href='https://github.com/Nwakaego-Ego/weather'>Open Sourced </a>
      on Github</footer>
      </div>
    </div>
  );
}

export default App;
