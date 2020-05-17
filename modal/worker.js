const mongoose = require('mongoose');

const Schema=mongoose.Schema
 const Work=new Schema(
{
w_name: String,
w_desc:String,
w_catid:String,
w_price:String,
w_img: String 

}
 )

 module.exports  =mongoose.model('worker',Work);
 