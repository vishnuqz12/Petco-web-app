import React,{useState} from "react";
import "./caretaker.css"

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


function Caretaker(){
// const [img,setImg] = useState('');
const [centre,setCentre] = useState('');
const [yourname,setYourname] = useState('');
const [price,setPrice] = useState('');
const [contact,setContact] = useState('');
const [place,setPlace] = useState('');





// const send = event => {
//     const data = new FormData();
//     // data.append("file", img);
//     data.append("centre", centre);
//     data.append("yourname", yourname);
//     data.append("price", price);

//     data.append("contact", contact);
//     data.append("place", place);
//     // data.append("consultation", consultation);

// console.log(data);
//     Axios.post("http://localhost:8000/api/caretaker", data)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };






const HandleSubmit = async (e)=>{
    e.preventDefault();
    const datas = {
        centre : centre,
        yourname : yourname,
        price : price,
        contact : contact,
        place : place,
    }
console.log(datas);
    try {
        Axios.post("http://localhost:8000/api/caretaker",datas);
       } catch (error) {
         console.log("erroorrrrrrrrrrrrrrrrrrrrrrrrrrr"+error);
       }

       window.location.reload();
}

    return(
<div className="pet-market">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="petmarket-head">Add your Caretakers to PETCO</h3>
</nav>

<div className="clinic-div">

<form  >
                
                <div className="form-group">
                    <label>Centre Name</label>
                    <input type="text" className="form-control " placeholder="Enter CentreName" value={centre} onChange={(e)=>setCentre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Caretaker Name</label>
                    <input type="text" className="form-control" placeholder="Enter yourname" value={yourname} onChange={(e)=>setYourname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="Enter Price"  value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" placeholder="Enter Contact"  value={contact} onChange={(e)=>setContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Place</label>
                    <input type="text" className="form-control" placeholder="Enter place" value={place} onChange={(e)=>setPlace(e.target.value)} />
                </div>
                {/* <div className="form-group">
                    <label>Consultation TIme</label>
                    <input type="text" className="form-control" placeholder="Enter time" value={consultation} onChange={(e)=>setConsultation(e.target.value)} />
                </div> */}
                {/* <div className="form-group">
                    <label>Description</label>
                    // {/* <input type="text" className="form-control description" placeholder="About your pet..." /> */}
                 {/* <textarea className="form-control description" placeholder="About your pet" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea> */}
                    
                {/* </div> */} 
               
                <button type="submit" className="btn btn-primary btn-block" onClick={HandleSubmit}>submit</button>
               
            </form>
</div>





 </div>
     )
}

export default Caretaker;

