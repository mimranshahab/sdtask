import React from 'react';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Drawer isOpen={true} />
      <Header/>
    </div>
  );
}

export default App;
