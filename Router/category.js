const mongoose=require("mongoose")
const cat=mongoose.model("categories")
const worker=mongoose.model("worker")
module.exports=(app)=>{
    app.post("/api/cat", async (req,res)=>{
        console.log(req.body)
        const {cat_img,cat_name , cat_desc}=req.body
        console.log(cat_img)
    const add =await new cat({c_name:cat_name,c_desc:cat_desc,c_img:cat_img}).save();
if(add){
    res.status(200).json({ success:true,redirectUrl: '/cat'});
}
    })
    app.get("/api/category", async (req,res)=>{
    const category =await cat.find()
res.send(category)
    })


   
    app.post("/api/prowork", async (req,res)=>{
        const {w_name,w_desc,w_cat,w_price,w_img}=req.body
    const add =await new worker({w_name:w_name,w_desc:w_desc,w_catid:w_cat,w_price:w_price,w_img:w_img}).save();
if(add){
    res.status(200).json({ success:true,redirectUrl: '/cat'});
}
    })




    app.post("/api/workerlist", async (req,res)=>{
       const {cat_id}=req.body
      const worklist = await worker.find({w_catid:cat_id})
      res.send(worklist)
    })

}