import React from 'react';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home'
import './App.css';


function App() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Footer/>
   </>
  );
}

export default App;
