import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from './features/counter/Counter';
import { Mycounter } from './features/counter/mycounter';



function App() {
  return (
    <Router>
      <div className="App">
        <Counter />
        <Mycounter/>

      </div>
    </Router>
  );
}

export default App;
