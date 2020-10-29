import React from 'react';
import './App.css';
import Header from './component/header';
import Navbar from './component/navbar';
import Router from './component/Routers';
import Footer from './component/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Navbar />
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
