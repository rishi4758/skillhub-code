
// import React,{Component} from "react"
// import axios from 'axios';
// export default class modal extends Component{
//  state={
//    name:" "
//  }
//   inp=(e)=>{
//     console.log(e)
// this.setState({name:e.target.value})
//   }
//   handle=(e)=>{
//     axios.post("/api",this.state)
//     e.preventDefault();
  
//     console.log(this.state)
//   }
//   render(){
//     return(

//       <div style={{marginTop:"500px"}}>
//         <input type="text" onChange={this.inp}/>
//         <input type ="submit" onClick={this.handle}/>
//       </div>
//     )
//   }
// }


import React,{Component, Fragment} from "react";
import { render } from "react-dom";
import './modal.css'
import {Card,Button} from "react-bootstrap"
import axios from 'axios';
import Popup from "reactjs-popup";
import Log from '../loginLogout'
 import Blur from "./blur"
export default  class Modal  extends Component{

 
state={
  username:" ",
  password:" "
}
  r_email=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
 this.setState({username:e.target.value})
  }
  
  r_pass=(e)=>{
    console.log(e.target.value)
    this.setState({password:e.target.value})
     }
     r_submit=(e)=>{
      axios.post("/api/register",this.state)
      .then((res)=>{
       
        if(res.data.user){
          window.alert(res.data.message)
        }
        else{
          
        window.location.href =`${res.data.redirect}`}})
        
     }     
       r_login=(e)=>{
axios.post("https://infinite-basin-75173.herokuapp.com/api/login",this.state).then((res)=>{

  if(res.data.success){
    window.location=`${res.data.redirectUrl}`
  }
  else{
    window.alert("username does not match with password")
  }
})
}

  render(){
   
    return(
<Fragment>


<Blur/>

<div className="log1">
  <div className=" container ">
  <div class="  modal-dialog cascading-modal " >  
  <div class="modal-content">
      <div class="modal-c-tabs">
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
          <li class=" loginbtn1 nav-item ">
            <a class="nav-link active " data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
          </li>
          <li class=" regbtn1 nav-item">
            <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Register</a>
          </li>
        </ul>

        <div className="tab-content ">
        <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
       
       <div className="social" style={{textAlign:"center"}}>
<button className="google_btn">       <a  href="/auth/google"  className="btn btn-social-icon"><i class=" fa fa-google-plus-official"></i> Sign in with google </a></button>

{/* <a  href="http://localhost:5555/auth/facebook"  className="btn btn-social-icon"><button className="fb_btn"><i class=" fa fa-facebook"></i> Sign in with Facebook</button></a> */}

      </div> 
        <div className="login-form" style={{textAlign:"center"}}> 
        <div>  <input type="text" onChange={this.r_email}  name="username" placeholder="Username" required/></div>

        <div> <input type="password" name="password"  onChange={this.r_pass}placeholder="Password" required/></div>
       {/* <div> <input type="submit"  onClick={this.r_login} value="Login"/> */}
      <div><button className="login_btn" type="submit" onClick={this.r_login}  value="Login">Login</button></div>
       </div>
          </div>
                
                 <div class="tab-pane fade" id="panel8" role="tabpanel">



            <form onSubmit= { this.r_submit}  class="modal-body">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <input type="email"  onChange={this.r_email} name="email" id="modalLRInput12" class="form-control form-control-sm validate"/>
                <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
              </div>

              <div class="md-form form-sm mb-5">
                <i class="fas fa-lock prefix"></i>
                <input type="password"   name="password" id="modalLRInput13" class="form-control form-control-sm validate" required/ >
                <label data-error="wrong" data-success="right" for="modalLRInput13">Your password</label>
              </div>

              <div class="md-form form-sm mb-4">
                <i class="fas fa-lock prefix"></i>
                <input type="password"  onChange={this.r_pass}id="modalLRInput14" class="form-control form-control-sm validate" required/ >
                <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password</label>
              </div>

              <div class="text-center  mt-2">
                <button type="submit"  class=" signbtn1 btn btn-info">Sign up <i class=" fas fa-sign-in-alt ml-1"></i></button>
              </div>

            </form>
          
            <div class="modal-footer">
              <div class="options text-right">
                <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
              </div>
           
            </div>
          </div>
         
        </div>

      </div>
    </div>

 </div>
</div> 
</div>
</Fragment>
    )
  }

}


