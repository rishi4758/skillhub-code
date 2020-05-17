import React,{Component, Fragment} from "react";
import {connect} from "react-redux"
import  {fetchCategory,insertWork} from "../actions"
import Axios from "axios"
class Insertwork extends Component{
    componentDidMount(){
        this.props.fetchCategory()
      }      
  state={
      w_name:"",
      w_desc:"",
      w_cat:null,
      w_price:"",
      w_img:null
  }
  wname=(e)=>{this.setState({w_name:e.target.value})}
  wdesc=(e)=>{this.setState({w_desc:e.target.value})}
  wcat=(e)=>{this.setState({w_cat:e.target.value})}
  wprice=(e)=>{this.setState({w_price:e.target.value})}
  wimg=(e)=>{ this.setState({w_img:e.target.files[0].name}) }

  onSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    return this.props.insertWork(this.state)
}
  category=()=>{
 const ar=Object.values(this.props.cat)
  return ar.map(cat=>{
return(<option   value={cat._id}>{cat.c_name}</option>)})}  
  render(){
      return(
          <div  style={{marginTop:"50px"}}class="container">
              <form onSubmit={this.onSubmit}>
                  <div class="form-group" >
          <label class="control-label" > Name of the Worker </label>
          
          <input type="text" onChange={this.wname} name="product_title" class="form-control" required />
          </div>
          <div class="form-group" >
<label class="control-label" >Worker Description</label>
<textarea  onChange={this.wdesc}class="form-control" maxlength="230" placeholder="Most search engines use a maximum of 230 chars for the description." ></textarea>
</div>
<div class="form-group" ><label class="control-label" > Category </label>
   <select name="cat"  onChange={this.wcat}class="form-control" ><option> Select a Category </option>
   {this.category()}</select></div>
<div class="form-group" >

<label class="control-label" > Price / Hour</label>

<input type="text" name="price" onChange={this.wprice} class="form-control" required />
</div>
<div class="form-group">
    <label for="exampleInputPassword1">image</label>
    <input type="file"  onChange={this.wimg} name="cat_img" class="form-control" id="exampleInputPassword1" placeholder="image size must be 600 * 600"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
              </form> 
                </div>)
}}
function mapStateToProps({cat}){
    return {cat}
    }
    export default connect(mapStateToProps,{fetchCategory,insertWork})(Insertwork)