import  React from 'react';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/styles.scss';

function App() {
  return (
    <Router>
      <div>
        <section class="grid grid-template-2">
          <div class="item logo">logo</div>
          <div class="item content">
            <div class="item">Content 1</div>
            <div class="item">Content 2</div>
            <div class="item">Content 3</div>
            <div class="item">Content 4</div>
          </div>
          <div class="item sidenav">
            <Menu />
          </div>
          <div class="item advert">
            <div class="item">advert 1</div>
            <div class="item">advert 2</div>
            <div class="item">advert 3</div>
          </div>
          <div class="item project">
            <div class="item">project 1</div>
            <div class="item">project 2</div>
          </div>
          <div class="item footer">footer</div>
        </section>
      </div>
    </Router>
  );
}

export default App;
