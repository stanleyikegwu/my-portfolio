import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

