// Hidden on all .d-none

// Hidden only on xs .d-none .d-sm-block

// Hidden only on sm .d-sm-none .d-md-block

// Hidden only on md .d-md-none .d-lg-block

// Hidden only on lg .d-lg-none .d-xl-block

// Hidden only on xl .d-xl-none

// Visible on all .d-block

// Visible only on xs .d-block .d-sm-none

// Visible only on sm .d-none .d-sm-block .d-md-none

// Visible only on md .d-none .d-md-block .d-lg-none

// Visible only on lg .d-none .d-lg-block .d-xl-none

// Visible only on xl .d-none .d-xl-block

import React,{Component} from 'react'
import './style.css'
import DrawerToggleButton from './toggle_button'
import axios from 'axios';
import Log from '../loginLogout'
import {Link} from 'react-router-dom'


class toolbar extends Component{

render(){

  return(
  <div className="container-fluid toolbar">
    <div className="row">

           <div className="toolbar__toggle-button col-3 d-sm-none padding-0">
             <DrawerToggleButton click={this.props.tog} />
          </div>

          <div className="   col-sm-8 col-md-8  d-none d-sm-block  ">
            <div className="row"> <div className=" toolbar__logo  col-sm-3 col-md-4  ">
                     <a href="/" style={{color:"whitesmoke",fontWeight:"800" ,fontSize:"40px",}} >Skill Hub</a>
              </div>
              <div className="header_menu  col-sm-9 col-md-8  " >
                  <div><a href="/home" className="lund">Home</a></div>
                  <div><Log/></div> 
              </div></div>
             
          </div>
          
      <div className=" col-9 col-sm-4 col-md-2 search">
      <form class="form-inline d-flex justify-content-center md-form form-sm active-purple active-purple-2 mt-2">
  <i class="fa fa-search" aria-hidden="true"></i>
  <input class="form-control form-control-sm ml-3 w-75" style={{fontWeight:"800", color:"white",fontSize:"15px"}} type="text" placeholder="Search"
    aria-label="Search"/>
</form>
        </div>
           
       </div>
          
    </div>
      
 
)
}
  
}

export default toolbar