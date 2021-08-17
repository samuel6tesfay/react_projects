import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Counter } from './features/counter/Counter';


function App() {
  return (
    <Router>
      <div className="App">
         <Counter/>
      </div>
    </Router>
  );
}

export default App;
