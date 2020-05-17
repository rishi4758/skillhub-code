const mongoose = require('mongoose');
const passport = require('passport');
const Schema=mongoose.Schema
 const users=new Schema(
{
username: String,
salt:String,
hash:String,
googleId: String,
gname:String,
fbId:String,
fname:String
}
 )

 module.exports  =mongoose.model('register',users);
 