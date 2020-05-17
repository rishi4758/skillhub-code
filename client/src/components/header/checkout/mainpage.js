 import React from "react"
 import {Checkout,Item} from "./checkout";
 import './checkout.css';
import { connect } from "react-redux";
 import _ from "lodash"
 import * as actions from "../../../actions"
  class Check extends React.Component {
  componentDidMount(){
    const obj={cat_id:this.props.match.params.id}
 console.log(obj)
   }
    render(){
      return (
       
     

        <div className="container check">
          <div className="row">
          <div className="col-12 col-md-6 mx-0 padding-0">
          <Item name="Developer" price="78Euro" img="/pic/engineer.jpg" />
</div>
         
          <div className="col-12 col-md-6 mx-0 padding-0 ">
          <Checkout />
</div>
{console.log(this.props.obj)}
       
       </div>   </div>
      
          
     
         
      )
    }
  }
//   function mapStateToProps(state,  ownProps ) {
//     return {
//         id: state.worker[ ownProps .props.match.params.id]
//     }
// }

function mapStateToProps (state, ownProps){
  const obj= _.find(state, {_id: ownProps.params.id})
return obj
 
};

export default connect(null,actions)(Check)