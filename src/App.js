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
import Foter from './components/home/foter/Foter';
import AllWomen from './components/allwomen/AllWomen';
import Carts from './components/cart/Carts'

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
          <Route exact path="/allWomen" >
            <main>
              <AllWomen/>
            </main>
          </Route>
          <Route exact path="/cart" >
            <main>
              <Carts/>
            </main>
          </Route>
        </Switch>
      </section>
        <section className='footer-home'>
                <Foter/>
        </section>
    </Router>
  );
}

export default App;
