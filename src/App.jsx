import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Location from './pages/Location';
import Registry from './pages/Registry';
import Story from './pages/Story';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/story" element={<Story />} />
        </Routes>
      </div>
    </div>
  );
}


export default App