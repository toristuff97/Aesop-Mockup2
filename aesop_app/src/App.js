import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fragrance from './Components/Fragrance';
import Carousel from 'bootstrap';
import HandsAndBody from './Components/HandsAndBody';


function App() {
  return (
    <div className="App">
      <Fragrance />
      <HandsAndBody />
    </div>
  );
}

export default App;
