import  React from 'react';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />

      </div>
    </Router>
  );
}

export default App;
