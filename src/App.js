import React,{useEffect,useState} from 'react';
import './App.css';
import {useGlobalContext} from './context';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero'

function App() {
  
  
  
  return (
    <section className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Hero/>
      </main>
    </section>
  );
}

export default App;
