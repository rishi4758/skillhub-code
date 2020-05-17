
// init setup
const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport');
const cors=require('cors');

const app=express();
const cookieSession=require("cookie-session");
const keys=require("./config/keys");

//session setup

app.use(
  cookieSession({
      maxAge:30 *24* 60 *60* 1000,
keys:[keys.cookie_key],
secure: false

  })
)
// apply  middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({origin:true,credentials: true}));

app.use(bodyParser.json());
app.use(function(err, req, res, next) {
  console.log(err);
});


// add database schemas
require("./modal/login")
require("./modal/category")
require("./modal/worker")
require("./passport/strategies.js")
// add other routers or restful api
require("./Router/register.js")(app);
require("./Router/category.js")(app);

//mongodb://127.0.0.1:27017/skillhub
if(process.env.NODE_ENV ==='production'){
  // express serveve up production assets
  // like main.js or main.css
  app.use(express.static('client/build'));
  
  // express will serve index.html
  // if it does not find the route
  const path=require("path");
  app.get('*',(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
  }
// connect to data base
const db=mongoose.connect(
   keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(
  console.log("connect database"));


// connect to the port 
const port= process.env.PORT || 5555;
const con=app.listen(port)


