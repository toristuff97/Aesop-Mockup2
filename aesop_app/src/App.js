import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ShippingModal from './Components/ShippingModal';


function App() {
  return (
    <div className="App">
      <ShippingModal />
    </div>
  );
}

export default App;