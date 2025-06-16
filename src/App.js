import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { createContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Team } from './pages/Team';
import { ComponentA } from './components/ComponentA';


export const userNameContext = createContext() 


function App() {

  

  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <userNameContext.Provider value={{ userName:"@Joshua100"}} >
       
        <ComponentA  />

        </userNameContext.Provider>

         <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/whoweare" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;