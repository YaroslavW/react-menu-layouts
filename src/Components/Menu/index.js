import React from 'react';
import MenuItem from '../MenuItem';
import '../../App.css'


const Menu = (props) => {

  const item = props.data.map((item, index)=>(
     <MenuItem key={index} name={item} />
  ));
  return (
    <div className="menu">
      {item}
    </div>
  );
};

export default Menu;