const mongoose=require("mongoose")
const register=mongoose.model("register")
const passport = require('passport');
const genPassword=require("../passport/passwordhash").genPassword
const logout = require('express-passport-logout');
/* PASSPORT LOCAL AUTHENTICATION */
module.exports=(app)=>{
app.post('/api/login', 
  passport.authenticate('local', { failureRedirect: '/login',session: true }),
  function(req, res) {
    res.status(200).json({ success:true,redirectUrl: '/home'});
  });
app.use(function(err, req, res, next) {
  console.log(err);
});

    app.post("/api/register",async (req,res,next)=>{  
    const saltHash=genPassword(req.body.password)
    const hash=saltHash.hash;
    const salt=saltHash.salt
      const user_exist= await register.findOne({username:req.body.username})
  if(user_exist){
    return res.status(201).json({
        success:true,
        user:true,
        message:"User already registerd with this email" })
  }else{
      const user=new register({
          username:req.body.username,
          salt:salt,
          hash:hash
      }).save()// use of save query
      return res.status(200).json({
        success:true,
        redirect:'/login'   
    })} 
    })

// google login?????????????????????????????????????

app.get('/auth/google/',
passport.authenticate('google',{
    scope:['profile','email']
}))
app.get('/auth/google/callback',
passport.authenticate('google'),
(req,res)=>res.redirect('https://infinite-basin-75173.herokuapp.com/home')
);

// facebook login???????????????????
// app.get('/auth/facebook', passport.authenticate('facebook'));

// app.get('/auth/fb/callback',
// passport.authenticate('facebook'),
// (req,res)=>res.redirect('http://localhost:3000/')
// );
    app.get('/api/user',function(req, res, next) {
     
     res.send(req.user)
      })
 
      app.get("/api/logout",(req,res)=>{
        req.logout();
        res.redirect('/')
    })
}

