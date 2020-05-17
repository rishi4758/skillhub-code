import React, { Component } from 'react'

import Toolbar from './Comp1'
import SideDrawer from './sidebar'
 import Backdrop from './backdrop/backdrop.js'


class App extends Component {
 state={
     sideopen:false
 }

 opensidebar=()=>{
     this.setState((prev)=>{
         console.log("jsdninfksjkak")
return {sideopen:!prev.sideopen}
     })
 }
 backdropClickHandler = () => {
    this.setState({ sideopen: false })
  }
  render() {
    let side;
    let back;
    if(this.state.sideopen){
side=<SideDrawer/>
back=<Backdrop back={ this.backdropClickHandler}/>
    }
    return (
      
        
      <div style={{ height: '100%' }}>  
      <Toolbar tog={this.opensidebar} /> 
       {
           side}
           {
           back
       }
       
      </div>
    )
  }
}

export default App