import React from 'react'
import './style.css'
import Log from "../loginLogout.js"
const sideDrawer = props => {
    
  return (
    <nav className="side-drawer">
      <div style={{textAlign:"center" ,marginBottom:"20px"}}><a href="/" style={{color:"whitesmoke",fontWeight:"800" ,fontSize:"40px",marginTop:"5px" }} >Skill Hub</a></div>
      <div style={{textAlign:"center", marginBottom:"40px"}}> <img src="./pic/user.png" style={{borderRadius:"125px",height:"100px"}}/></div> 
          <div className="mw"><a href="/home">Home</a></div>
        
        
        <div className="mw"><Log/></div>
  
    </nav>
  )
}

export default sideDrawer