import React from 'react';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Routes from './components/Routes/Routes';
import Footer from './components/Footer/Footer';


import './App.css';

function App() {
  return (
    <main>
      <Header />
      <NavBar />
      <Routes />
      <Footer />
    </main>
  );
}

export default App;
