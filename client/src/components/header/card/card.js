import React ,{Component, Fragment} from "react";
import {Card,Button,Container}from "react-bootstrap";
import Slider from  '../slider/slider.js';
import "./card.css"
import {connect} from "react-redux";
import {fetchCategory}from "../../../actions"
 class Cards extends Component{
componentDidMount(){
  this.props.fetchCategory()
}


renderlist=()=>{
  // const peopleArray = Object.values(peopleObj)
  // const peopleArray = Object.keys(peopleObj).map(i => peopleObj[i])
  const ar=Object.values(this.props.cat)
  return ar.map(cat=>{
    return(
      <div className="col-6 col-sm-4 col-md-4 card">
<Card.Img  className="padding-0"  variant="top" src={`./pic/${cat.c_img}`}  />
  <Card.Body>
    <Card.Title style={{height:"60px", overflow:"hidden"}}>{cat.c_name}</Card.Title>
    <div style={{maxHeight:"60px", minHeight:"60px",display:"block",overflow:"hidden"}}><Card.Text >
    {cat.c_desc}
    </Card.Text></div>
    <a href={`/details/${cat._id}`}><button  className="need" >Need..?</button></a>
  </Card.Body>
</div>

    )
  }
  )}
render()
{
    return(
<Fragment>
  
 <Slider/><div style={{textAlign:"center" ,marginBottom:"20px", fontWeight:"600", fontSize:"45px"}}> <i class="fab fas-servicestack"></i></div>

 <div style={{textAlign:"center" ,marginBottom:"20px", fontWeight:"600", fontSize:"45px"}}><span> Our Services</span></div>

<div className="container">
  <div className="row">

  {this.renderlist()}

{/* // <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0"  variant="top" src="./pic/4.png" />
//   <Card.Body>
//     <Card.Title>Hair Dressing</Card.Title>
//     <Card.Text  style={{height:"60px"}}>
//    best hair dresser in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body>
// </div>
// <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0 photo"  variant="top" src="./pic/2.png" />
//   <Card.Body>
//     <Card.Title>Freelancer</Card.Title>
//     <Card.Text  style={{height:"60px"}}>
//      best freelancer in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body>
// </div>
// <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0"  variant="top" src="./pic/5.png" />
//   <Card.Body>
//     <Card.Title>Designer</Card.Title>
//     <Card.Text  style={{height:"60px"}}>
//      best designers in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body>
// </div>

// <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0"  variant="top" src="./pic/6.png"/>
//   <Card.Body>
//     <Card.Title>Cooking</Card.Title>
//     <Card.Text  style={{height:"60px"}}>
//      best chef in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body></div>
// <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0"  variant="top" src="./pic/3.png" />
//   <Card.Body>
//     <Card.Title>Mechanic</Card.Title>
//     <Card.Text  style={{height:"60px"}}>
//      best mechanics in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body>
// </div>
// <div className="col-6 col-sm-4 col-md-4 card">
// <Card.Img  className="padding-0"  variant="top" src="./pic/1.png" />
//   <Card.Body>
//     <Card.Title>Driver</Card.Title>
//     <Card.Text style={{height:"60px"}}>
//    best drivers in the city for you
//     </Card.Text>
//     <a href="/details"><button  className="need" >Need..?</button></a>
//   </Card.Body>
// </div>
     */}
  </div>
</div>

</Fragment>
    )
}

}
function mapStateToProps({cat}){
return {cat}
}
export default connect(mapStateToProps,{fetchCategory})(Cards)