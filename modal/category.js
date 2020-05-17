const mongoose = require('mongoose');

const Schema=mongoose.Schema
 const Cat=new Schema(
{
c_name: String,
c_desc:String,
c_img: String 
}
 )

 module.exports  =mongoose.model('categories',Cat);
 