import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header />
      <img src={logo} alt={Title} />
      <Footer />
    </div>
  );
}

export default App;
