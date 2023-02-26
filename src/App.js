import React from 'react';
import './App.css';
import { Clients, } from './components/Clients';
import Category  from '././components/Category';
import Home from "./components/Home";
import Choose from './components/Choose';
import MarketPlace from './components/MarketPlace';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
     <Home/>
     <Clients/>
     <Category/>
     <Choose/>
     <MarketPlace/>
     <Subscribe/>
     <Footer/>
     <ScrollToTop/>
    </div>
  );
}

export default App;
