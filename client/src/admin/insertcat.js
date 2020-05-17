import React,{Component} from "react";
import {connect} from "react-redux"
import * as actions from "../actions"
class Insertcat extends Component{

    state={
        cat_name:"",
        cat_desc:"",
        cat_img:null
    }
cname=(e)=>{
this.setState({cat_name:e.target.value})
}

cdesc=(e)=>{
    this.setState({cat_desc:e.target.value})
    }

    cimg=(e)=>{
        this.setState({cat_img:e.target.files[0].name})
        }
        onSubmit=(e)=>{
            e.preventDefault()
            return this.props.insert_cat(this.state)
        }
    render(){
        return(
            <div>
<form onSubmit={this.onSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1"> Category Name</label>
    <input type="text" onChange={this.cname} name="cat_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example:freelancer"></input>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text"   onChange={this.cdesc} name="cat_desc" class="form-control" id="exampleInputPassword1" placeholder="description must be 100-200 words"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">image</label>
    <input type="file"  onChange={this.cimg} name="cat_img" class="form-control" id="exampleInputPassword1" placeholder="image size must be 600 * 600"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        )
    }
}
export default connect(null,actions)( Insertcat)