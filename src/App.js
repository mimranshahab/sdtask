import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';
import RightBar from './components/RightBar';
import Block from './components/Block';

function App() {
  return (
    <div>
      <Drawer isOpen={true} />
      <Header/>
      <RightBar/>
      <Block/>
    </div>
  );
}

export default App;
