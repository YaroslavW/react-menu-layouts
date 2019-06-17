import React from 'react';
import Menu from './Components/Menu';
import './App.css';

function App() {
  const menu_items = ["home", 'about', 'goods', 'contacts']
  return (
    <>
      <Menu data={menu_items} />
    </>
  );
}

export default App;
