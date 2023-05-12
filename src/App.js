import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Drawer from './components/Drawer';
import Header from './components/Header';
import CalculatorDark from './components/calculator-dark';

function App() {
  return (
    <div>
      {/* <Drawer isOpen={true} />
      <Header/> */}
      <CalculatorDark/>
    </div>
  );
}

export default App;
