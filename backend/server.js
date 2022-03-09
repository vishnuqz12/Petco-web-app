const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const newcustomer = require("./components/Customer/customer");
const petmarket = require("./components/petmarket/petmarket")
const caretaker = require("./components/caretaker/caretaker")
const clinic = require("./components/clinic/clinic");
const bodyParser = require("body-parser");


const app = express();

app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use("/api",newcustomer);
app.use("/api",petmarket);
app.use("/api",caretaker);
app.use("/api",clinic);



dotenv.config();
// app.use("/api",newcustomer);



const url = "mongodb://localhost:27017/petooDB"
// const url = process.env.DB_URL;
mongoose.connect(url).catch((error => handleError(error)));
// mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.once("open",()=>console.log("db is connected"));


// app.use(express.static(path.join(__dirname,'./frontend/build')));
// app.get("/*",(req,res)=>{
//     res.sendFile(path.join(__dirname,'./frontend/build','index.html'));
// })

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>console.log(`port is connected to ${PORT}`))

