import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navigation from './components/menu/navigation';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='body'>
      <Header />
      <Navigation />
      <div className='home'>
        <Routes>
          <Route path="my-Website" element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Routes> 
        <Footer />
      </div>
      
    </div> 
  );
}

export default App;
