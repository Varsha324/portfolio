import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
