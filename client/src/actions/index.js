import axios from "axios";
import {FETCH_USER,FETCH_CAT,FETCH_WORKER} from "./types"
export const User=()=> async dispatch=>{
    axios.defaults.withCredentials = true;
   const res=await axios.get("/api/user")
   dispatch ({type:FETCH_USER,payload:res.data})
    
}
export const insert_cat=(category)=> async dispatch=>{
    axios.defaults.withCredentials = true;
   const res=await axios.post("/api/cat",category)
  if(res){ window.alert("category added successfully")
   window.location=`${res.data.redirectUrl}`
}
}

export const fetchCategory=(category)=> async dispatch=>{
    axios.defaults.withCredentials = true;
   const res=await axios.get("https://infinite-basin-75173.herokuapp.com/api/category")
   console.log(res.data)
   dispatch ({type:FETCH_CAT,payload:res.data})
  
}


export const insertWork=(worker)=> async dispatch=>{
   const res=await axios.post("/api/prowork",worker)
  if(res){ window.alert("worker added successfully")
   window.location=`${res.data.redirectUrl}`
}
}

export const fetchWorker=(cat_id)=> async dispatch=>{
    console.log(cat_id)
   const res=await axios.post("https://infinite-basin-75173.herokuapp.com/api/workerlist",cat_id)
   console.log("klmklmsdlkklmkl")
   console.log(res.data)
   dispatch ({type:FETCH_WORKER,payload:res.data})
  
}