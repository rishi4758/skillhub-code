import React ,{Component} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
 class Log extends Component{
  logout=()=>{
    axios.defaults.withCredentials = true;
    axios.get("/api/logout").then((res)=>{
      console.log(res)
    })
  }
    login=()=>{
      if(this.props.auth){return <button onClick={this.logout}> Logout</button>}
      else{
          return <a href ="/login">Login</a>
      }
       
    }

    render(){
    return <div>{this.login()}</div>
    }
}
function mapStateToProps({auth}){
  return {auth}
}
export default connect(mapStateToProps)(Log)