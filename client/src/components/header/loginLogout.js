import React ,{Component} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
 class Log extends Component{
 
    login=()=>{
      if(this.props.auth){
        return <a href="/api/logout" >Logout</a>
      }
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