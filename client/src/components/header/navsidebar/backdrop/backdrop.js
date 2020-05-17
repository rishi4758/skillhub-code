import React from 'react';
import './backdrop.css'
const backdrop=(props)=>{
    return(
        <div className="backdrop" onClick={props.back}></div>
    )
}
export default backdrop