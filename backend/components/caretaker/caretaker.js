const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

//database schema and models


const caretakerSchema = new mongoose.Schema({
    centre : {
        type:String,
        required:true
    },
    yourname : {
        type:String,
        required:true
    },
    price : {
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
    }
});
const careModel = mongoose.model("caretaker",caretakerSchema);

router.post('/caretaker', function (req, res) {
    var post = new careModel({
         centre:req.body.centre,
         yourname: req.body.yourname,
         price : req.body.price,
         contact : req.body.contact,
         place : req.body.place

    })
   post.save((err)=>{
       if(!err){
           console.log("caretaker data is added");
       }else{
           console.log("error of posting "+err);
       }
   })
  })

  router.get("/newcaretakers", function (req, res, next) {
    // console.log(`HOME ROUTE!`);
    careModel.find({}, function (err, result) {
        if (err) return handleError(err);
        res.send(result)
      });
  });

  

module.exports = router;