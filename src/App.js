import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Block from './components/Block';
import TopTab from './components/TopTab';

function App() {
  return (
    <div>
      <Drawer isOpen={true} />
      <Header/>
      <TopTab/>
      <Block/>
    </div>
  );
}

export default App;
