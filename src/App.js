import React from 'react';

import Header from './components/Header/Header';
import Routes from './components/Routes/Routes';

import ArticleProvider from "./components/Article/Context/articleContext";
import Articles from "./containers/Articles"
import AddArticle from "./components/Article/AddArticle";

import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Routes />
    </main>
  );
}

export default App;
