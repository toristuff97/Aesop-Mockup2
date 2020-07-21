import React from 'react';
import './App.css';
import ShippingModal from './Components/ShippingModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fragrance from './Components/Fragrance';
import NurturingFormulations from './Components/NuturingFormulations';
import ArchiAndDesign from './Components/Architecture-Design/ArchiAndDesign';
import AesopEssentials from './Components/AesopEssentials';
import HandsAndBody from './Components/HandsAndBody';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
      <ShippingModal />
      <AesopEssentials />
      <Fragrance />
      <HandsAndBody />
      <ArchiAndDesign />
      <NurturingFormulations />
      <Footer />
    </div>
  );
}

export default App;