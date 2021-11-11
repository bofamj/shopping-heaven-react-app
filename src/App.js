import React,{useEffect,useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {useGlobalContext} from './context';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Women from './components/womenClothing/Women';
import BestMen from './components/bestMenClothing/BestMen';

function App() {
  
  
  
  return (
    <Router>
      <section className="App">
        <header>
          <Nav/>
        </header>
        <Switch>
          <Route exact path="/" >
            <main>
              <Home/>
            </main>
          </Route>
          <Route exact path="/women" >
            <main>
              <Women/>
            </main>
          </Route>
          <Route exact path="/men" >
            <main>
              <BestMen/>
            </main>
          </Route>
        </Switch>
      </section>
      
    </Router>
  );
}

export default App;
