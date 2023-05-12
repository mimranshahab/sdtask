import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Drawer from './components/Drawer';
import Header from './components/Header';
import CalculatorDark from './components/calculator-dark';
import TopTab from './components/TopTab';
import RightBar from './components/RightBar';
import Block from './components/Block';

function App() {
  return (
    <div>
      <Drawer isOpen={true} />
      <Header/>
      <RightBar/>
      <TopTab/>
      <Block/>
      <CalculatorDark/>
    </div>
  );
}

export default App;
