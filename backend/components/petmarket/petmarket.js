const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const {v4:uuidv4} = require("uuid");
const fs = require("fs");
const router = express.Router();
const path = require("path");

// const DIR = '.././public/';
//database schema and models


const petmarketSchema = new mongoose.Schema({
    file: {
        type:String,
        required:true

        // data: Buffer,
        // contentType: String

      },
    breed : {
    type:String,
        required:true
    },
    age : {
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
    description : {
        type:String,
        required:true
    }

});
const Petmodel = mongoose.model("petmarket",petmarketSchema);


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
  
var upload = multer({ storage: storage });


router.post("/market",upload.single("file"),async (req,res)=>{

    const data = {
      
        file:req.file.path,
        breed : req.body.breed,
        age:req.body.age,
        contact:req.body.contact,
        place:req.body.place,
        description:req.body.description
    }

    const newUser = new Petmodel(data);

 




        newUser.save((err)=>{
            if(err){
                console.log("erooorre");
            }else{
                console.log("data is addededed");
            }
        })
            //    .then(() => res.json('User Added'),console.log("errorrrrr"))
            //   .catch(err => res.status(400).json('Error: ' + err));


    //  const {file,body:{name}} = req;
    //  if(file.mimetype != "image/jpeg") next(new Error("invalid file"))



    // console.log("hello");
    // console.log(req.file);
})


router.get("/petmarket", function (req, res, next) {
    // console.log(`HOME ROUTE!`);
    Petmodel.find({}, function (err, result) {
        if (err) return handleError(err);
        res.send(result)
      });
  });































//////////////////////////////////////////////////////////////////
// const upload = multer({
//     dest : ".././public/",
// })

// const uploadImg = upload.single('photo');
// router.post("/market",uploadImg,(req,res)=>{

//     console.log(req.file);

//     res.send("good")

//     res.status(200).json({
//         success:"success",
//     })
// })
    












/////////////////////////////////////////////////////////////////////////
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'images');
//     },
//     filename: function(req, file, cb) {   
//         cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }
// let upload = multer({ storage, fileFilter });


// router.route('/petmarket').post(upload.single('photo'), (req, res) => {
//     const image = req.file.filename;
//     const breed = req.body.breed;
//     const age = req.body.age;
//     const contact = req.body.contact;
//     const place = req.body.place;
//     const description = req.body.description;


//     const newUserData = {
//         photo,
//         breed,
//         age,
//         contact,
//         place,
//         description
//     }

//     const newUser = new Pet(newUserData);

//     newUser.save()
//            .then(() => res.json('User Added'),console.log("errorrrrr"))
//            .catch(err => res.status(400).json('Error: ' + err));
// });











// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now());
//     }
//   });
  
//   const upload = multer({ storage: storage });


// router.post('/petmarket', upload.single('image'), async (req, res) => {
//     //create a new user
//     console.log(req.file)
//     const rope = new Pet({
//         image: req.file.path,
//         breed: req.body.breed,
//         age: req.body.age,
//         contact: req.body.contact,
//         place: req.body.place,
//         description: req.body.description,
      
//     });
//     try {
//         await rope.save();
//         res.status(201).json(rope);
//         console.log(req.body)
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });
















///////////////////////////////////////////////////////////////////

// const storage = multer.diskStorage({
    
//       destination: (req, file, cb) => {
    
//         cb(null, './uploads/')
    
//       },
    
//       filename: (req, file, cb) => {
    
//         cb(null, new Date().toISOString() + file.originalname)
    
//       }
    
//     });

//     const upload = multer({
        
//           destination: storage,
        
//           limits: {fileSize: 1200 * 1200 * 5}
        
//         })

//         router.post('/petmarket', upload.single('imageId'), (req, res, next) => {
            
//               const photo = new petmarket({
            
//                 _id: new mongoose.Types.ObjectId(),
            
//                 imageId: req.file.path,
//                 breed : req.body.breed,
//                 age:req.body.age,
//                 contact:req.body.contact,
//                 place:req.body.place,
//                 description:req.body.description
            
//               });
            
             
            
//               photo.save()
            
//                 .then(result => {
            
//                   res.status(200).json(photo)
            
//                 })
            
//                 .catch(err => {
            

//                     console.log("paaathhhhhhhhhhhhhhhhhhhhhhhhh"+req.file.path);
//                   res.status(500).json({
            
//                     error: err
            
//                   })
            
//                 })
            
//             });
            
        
    



























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// router.post("/petmarket", (req, res) => {
//     var breed= req.body.breed;
//     var age = req.body.age;
//     var contact = req.body.contact;
//     var place = req.body.place;
//     var description= req.body.description;
  
  
//     var imgPath = req.file.path;
//     var image = newusermodel.image.data = fs.readFileSync(imgPath);
//     newusermodel.image.contentType = 'image/jpg' || 'image/png';
  
//     var newBook = {image: image, breed: breed, age: age, contact: contact, place: place, 
//     description: description};
//     newusermodel.create(newBook, function(err, newlyCreated){
//       if (err) {
//           console.log("uploading erroerr"+err);
//       } else {
//           console.log(newlyCreated);
//       }
//    });
  
//   })
















//////////////////////////////////


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

// router.post('/petmarket', upload.single('image'), (req, res, next) => {
//     const url = req.protocol + '://' + req.get('host')
//     const user = new newusermodel({
//         image: url + '/public/' + req.file.filename,
//         breed:req.body.breed,
//         age:req.body.age,
//         contact : req.body.contact,
//         place:req.body.place,
//         description : req.body.description

//     });
//     user.save().then(result => {
//         res.status(201).json({
//             message: "User registered successfully!",
//             userCreated: {
//                 image: result.image,
//                 breed:result.breed,
//                 age:result.age,
//                 contact : result.contact,
//                 place:result.place,
//                 description : result.description
//             }
//         })
//     }).catch(err => {
//         console.log("errroreeeee"+err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// router.post('/newuser', function (req, res) {
//     var post = new newusermodel({
//          username:req.body.username,
//          email: req.body.email,
//          password : req.body.password
//     })
//    post.save((err)=>{
//        if(!err){
//            console.log("data is added");
//        }else{
//            console.log("error of posting "+err);
//        }
//    })
//   })

// SET STORAGE
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
//   var upload = multer({ storage: storage })

//   router.post("/petmarket",upload.single('myImage'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var Buffer = Buffer
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     newusermodel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

  module.exports = router;