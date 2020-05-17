import React, { Fragment } from 'react'

import './style.css'

const drawerToggleButton = (props) => (
 
    <button className=" togbtn1 toggle-button" onClick={props.click} style={{marginTop:"8px"}}>
      <i className="fa fa-align-justify fa-2x "></i>
  </button>
)

export default drawerToggleButton