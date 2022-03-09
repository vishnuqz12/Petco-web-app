const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

//database schema and models


const newclinicSchema = new mongoose.Schema({
    drname : {
        type:String,
        required:true
    },
    clinic : {
        type:String,
        required:true
    },
    
    contact : {
        type:String,
        required:true
    },
    place : {
        type:String,
        required:true
    },
    consultation : {
        type:String,
        required:true
    }
});
const newclinicModel = mongoose.model("clinic",newclinicSchema);

router.post('/newclinic', function (req, res) {
    var post = new newclinicModel({
         drname:req.body.drname,
         clinic: req.body.clinic,
         contact : req.body.contact,
         place : req.body.place,
         consultation : req.body.consultation


    })
   post.save((err)=>{
       if(!err){
           console.log("clinic data is added");
       }else{
           console.log("error of posting "+err);
       }
   })
  })

  router.get("/petclinics", function (req, res, next) {
    // console.log(`HOME ROUTE!`);
    newclinicModel.find({}, function (err, result) {
        if (err) return handleError(err);
        res.send(result)
      });
  });

  

module.exports = router;