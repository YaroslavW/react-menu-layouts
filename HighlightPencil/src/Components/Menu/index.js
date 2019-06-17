import React from 'react';
import MenuItem from '../MenuItem';
import '../../App.css'


const Menu = (props) => {

  const item = props.data.map((item, index)=>(
     <MenuItem key={index} name={item} />
  ));

    const addActive = e => {
      e.preventDefault();
      const element = e.target.className;
      const elements = document.getElementsByClassName("menu__link");
      console.log(elements)
      elements.map(el => 
        el.classList.contains('menu__link__active') ? el.classList.remove("menu__link__active") : true
      );
     
      element.classList.add("menu__link__active");

    };

  return (
    <div className="menu" onClick={addActive}>
      {item}
    </div>
  );
};

export default Menu;