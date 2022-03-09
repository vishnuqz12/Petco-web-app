const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

//database schema and models


const newuserSchema = new mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
});
const newusermodel = mongoose.model("newcustomer",newuserSchema);

router.post('/newuser', function (req, res) {
    var post = new newusermodel({
         username:req.body.username,
         email: req.body.email,
         password : req.body.password
    })
   post.save((err)=>{
       if(!err){
           console.log("data is added");
       }else{
           console.log("error of posting "+err);
       }
   })
  })

  router.get('/olduser',(req,res)=>{
      let data = req.body;
      newusermodel.findOne({data},(err,result)=>{
          if(err){
console.log("fetching error" +err);
          }  else{
            console.log(result.password);
res.json(result.password)
          }
      })
  })

  

module.exports = router;