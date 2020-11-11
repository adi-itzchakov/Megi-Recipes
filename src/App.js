import React from 'react';
import './App.css';
import Header from './component/header';
import Navbar from './component/navbar';
import Router from './component/Router';
import Footer from './component/footer';

function App() {
  return (
      <div>
        <Header/>
        <Navbar />
        <Router />
        <Footer />
      </div>
  );
}

export default App;
