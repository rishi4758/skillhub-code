import React from "react"
  import './checkout.css';
 export  const Item = (props) => (
    <div className="item-container">
      <div className="item-image">
        <img src={props.img}/>
        <div className="item-details">
          <h3 className="item-name"> {props.name} </h3>
          <h2 className="item-price"> {props.price} </h2>
        </div>
      </div>
    </div>
  );
  
 export const Checkout = (props) => (
  
      <div className="checkout-container"  style={{textAlign:"center"}}>
       <h3 className="heading-3">Credit card checkout</h3>
       <Input label="Cardholder's Name" type="text" name="name" />
       <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
        <div className="row">
          <div className="col">
            <Input label="Expiration Date" type="month" name="exp_date" />
          </div>
          <div className="col">
            <Input label="CVV" type="number" name="cvv" />
          </div>
        </div>
       <div><Button  text="Place order" /></div> 
      </div>
  
  );
  
  const Input = (props) => (
    <div className="input">
      <label className="lab">{props.label}</label>
      <div className="input-field">
        <input type={props.type} name={props.name} />
        <img src={props.imgSrc}/>
      </div>
    </div>
  );
  
  const Button = (props) => (
   <button onClick={(e)=>{
     e.preventDefault();
     window.alert(" Our Service Provider will contact you in 5 minutes Thank you!")
     window.location="/home"
   }} className="checkout-btn" type="button">{props.text}</button>
  );
  