import React from 'react';
import '../../App.css'
const MenuItem = (props) => {

  return (
    <a href={'#' + props.name} className="menu__link">
      {props.name}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.9 43.4">
        <path d="M151.9,13.6c0,0,3.3-9.5-85-8.3c-97,1.3-58.3,29-58.3,29s9.7,8.1,69.7,8.1c68.3,0,69.3-23.1,69.3-23.1 s1.7-10.5-14.7-18.4" />
      </svg>
    </a>
  );
};

export default MenuItem;