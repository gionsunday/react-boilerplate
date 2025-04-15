import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import { About } from './components/About';
import Contact from './components/Contact';
import {FunCounter}  from './components/FunCounter';
import ArrayMapper from './components/ArrayMapper';

function App() {

  return (
    <>
    <ArrayMapper />
    <Hero />
    <About />
    <Contact />
    <FunCounter />
    </>
  );
}

export default App;

