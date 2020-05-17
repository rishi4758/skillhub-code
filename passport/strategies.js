const mongoose=require("mongoose")
const register=mongoose.model("register")
const passport = require('passport');
const lstrategy = require('passport-local').Strategy;
const validPassword=require("./passwordhash.js").validPassword
const strategy=require("passport-google-oauth20").Strategy;
const fstrategy=require("passport-facebook").Strategy;
const key=require("../config/keys")
const local_strategy =new lstrategy((username, password,done)=>{
    register.findOne({ username: username }).then(
  (user)=>{
        if(!user){return done(null,false)}
        const isValid=validPassword(password,user.hash,user.salt);
        if(isValid){return done(null,user)}
        else{return done("user not exist",false)}
    })})

// gooogle ??????????????????????????
const google_strategy=new strategy(
    
    {clientID:key.googleclientID,
    clientSecret:key.googleclientSecret,
    callbackURL:'/auth/google/callback',
    proxy:true
    },
     async (Token,refreshToken,profile,done)=>{
        console.log("it works")
         const userExist=await register.findOne({googleId:profile.id})
         
        if(userExist){
            
            return done(null,userExist);
        }
         const use=  await new register({ googleId:profile.id, gname:profile.displayName }).save()
                done(null,use);
            
    }
    )

    // // facebook startegy?????????????????????
    // const facebook_strategy=new fstrategy(
    
    //     {clientID:'576748669939888',
    //     clientSecret:'af3d8b68cfaa11b77da22d1b16986bef',
    //     callbackURL:'/auth/fb/callback',
    //     proxy:true
    //     },
    //      async (Token,refreshToken,profile,done)=>{
    //          const userExist=await register.findOne({fbId:profile.email})         
    //         if(userExist){
    //             return done(null,userExist);
    //         }
    //          const use=  await new register({ fbId:profile.id, fname:profile.name.givenName + ' ' + profile.name.familyName}).save()
    //                return done(null,use);     
    //     }
    //     )
    if(google_strategy ){passport.use( google_strategy )}
    if(local_strategy ){passport.use( local_strategy )}
    // if(facebook_strategy){passport.use( facebook_strategy )}
passport.serializeUser((register,done)=>{
    done(null,register.id);
})

passport.deserializeUser((id,done)=>{
    register.findById(id).then((user)=>{
        done(null,user)
        
    })
})