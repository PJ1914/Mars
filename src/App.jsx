// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Partners from './components/Partners/Partners';
import HumanOnMars from './components/HOM/HumanOnMars';
import News from './components/news/News';
import Technology from './components/technology/Technology';
import { Navbar } from './components/home/Navbar';

function App() {
  return (
    <Router>
      <div className='main'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/human-on-mars' element={<HumanOnMars />} />
          <Route path='/news' element={<News />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
