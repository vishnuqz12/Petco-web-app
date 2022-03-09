import React,{useState} from "react";
import "./petmarket.css"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


function Petmarket(){
const [img,setImg] = useState('');
const [breed,setBreed] = useState('');
const [age,setAge] = useState('');
const [contact,setContact] = useState('');
const [place,setPlace] = useState('');
const [description,setDescription] = useState('');





const send = event => {
    const data = new FormData();
    data.append("file", img);
    data.append("breed", breed);
    data.append("age", age);
    data.append("contact", contact);
    data.append("place", place);
    data.append("description", description);

console.log(data);
    Axios.post("http://65.0.180.125:5000/api/market", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };






// const HandleSubmit = async (e)=>{
//     e.preventDefault();
//     const datas = {
//         file : img,
//         breed : breed,
//         age : age,
//         contact : contact,
//         place : place,
//         description : description
//     }
// console.log(datas);
//     try {
//         Axios.post("http://65.0.180.125/api/market",datas);
//        } catch (error) {
//          console.log("erroorrrrrrrrrrrrrrrrrrrrrrrrrrr"+error);
//        }
// }

    return(
<div className="pet-market">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="petmarket-head">Sale Your Pet on PETCO</h3>
</nav>

<div className="market-div">

<form >
                <div className="form-group">
                    <label>Add image</label>
                    <input type="file" accept=".png, .jpg, .jpeg" className="form-control add-img" placeholder="Enter email"  onChange={(e)=>setImg(e.target.files[0])} />
                </div>
                <div className="form-group">
                    <label>Breed</label>
                    <input type="text" className="form-control " placeholder="Enter Breed" value={breed} onChange={(e)=>setBreed(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                </div>
                {/* <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address" />
                </div> */}
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" placeholder="Enter phone number" value={contact} onChange={(e)=>setContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Place</label>
                    <input type="text" className="form-control" placeholder="Enter your place" value={place} onChange={(e)=>setPlace(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    {/* <input type="text" className="form-control description" placeholder="About your pet..." /> */}
                    <textarea className="form-control description" placeholder="About your pet" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                    
                </div>
               
                <button type="submit" className="btn btn-primary btn-block" onClick={send}>Submit</button>
               
            </form>
</div>





 </div>
     )
}

export default Petmarket;

