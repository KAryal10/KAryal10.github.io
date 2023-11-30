import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navigation from './components/menu/navigation';
import Intro from './components/intro/intro'

function App() {
  return (
    
    <div className='body'>
      <Header />
      <Navigation />
      <div className='home'>
        <Routes>
          <Route path="/" element={ <><Intro /> <Home /></>} />
          <Route path="resume" element={<Resume />} />
        </Routes> 
        <Footer />
      </div>
      
    </div> 
  );
}

export default App;
