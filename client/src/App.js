import React , {Component, Fragment} from 'react';
import axios from "axios";
import cors from 'cors'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/header/navsidebar/index1.js';
import Slider from  './components/header/slider/slider.js';
import Card from './components/header/card/card.js';
import Login from './components/header/modal/modal.js'
import Footer from './components/header/footer/footer.js';
import Details from './components/header/item/item.js';
import Check from './components/header/checkout/mainpage';
import Cat from './admin/insertcat'
import Work from './admin/insertworker'
import * as actions from "./actions"
import {connect} from "react-redux";
 class App extends Component{

  componentDidMount(){
 
this.props.User();
    
         }
render(){
  let login;
  if(!this.props.auth){
    login=<Login/>
  }
  

  return(
   <Fragment>
      <Header/>
      {login} 
   
       <BrowserRouter>
       <Route exact path="/" component={Card} exact={true} />
       <Route exact path="/home"component={Card}></Route>
       {/* <Route exact path="/Login" component={Login}></Route> */}
       <Route exact path="/check/:id" component={Check}></Route>
    <Route exact path="/details/:id" component={Details}></Route>
    <Route exact path="/insertworker" component={Work}></Route>
    <Route exact path="/insertcat" component={Cat}></Route>
    <Route exact path="/login" component={Login}></Route>
   
    </BrowserRouter>
    </Fragment>
   
  )
  }
 
}
function mapStateToProps({auth}){
  return {auth}
}
export default  connect(mapStateToProps,actions)(App);
