import React,{useState} from "react";
import "./clinic.css"

import Axios from "axios";


function Clinic(){
// const [img,setImg] = useState('');
const [drname,setDrname] = useState('');
const [clinic,setClinic] = useState('');
const [contact,setContact] = useState('');
const [place,setPlace] = useState('');
const [consultation,setConsultation] = useState('');





// const send = event => {
//     const data = new FormData();
//     // data.append("file", img);
//     data.append("drname", drname);
//     data.append("clinic", clinic);
//     data.append("contact", contact);
//     data.append("place", place);
//     data.append("consultation", consultation);

// console.log(data);
//     Axios.post("http://172.31.4.239:5000/api/clinic", data)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };






const HandleSubmit = async (e)=>{
    e.preventDefault();
    const datas = {
        drname : drname,
        clinic : clinic,
        contact : contact,
        place : place,
        consultation : consultation

    }
console.log(datas);
    try {
        Axios.post("http://65.0.180.125:5000/api/newclinic",datas);
       } catch (error) {
         console.log("erroorrrrrrrrrrrrrrrrrrrrrrrrrrr"+error);
       }

       window.location.reload();
}

    return(
<div className="pet-market">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="petmarket-head">Add your clinics on PETCO</h3>
</nav>

<div className="clinic-div">

<form >
                
                <div className="form-group">
                    <label>Doctor Name</label>
                    <input type="text" className="form-control " placeholder="Enter Name" value={drname} onChange={(e)=>setDrname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Clinic</label>
                    <input type="text" className="form-control" placeholder="Enter Clinic" value={clinic} onChange={(e)=>setClinic(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" className="form-control" placeholder="Enter Contact"  value={contact} onChange={(e)=>setContact(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Place</label>
                    <input type="text" className="form-control" placeholder="Enter place" value={place} onChange={(e)=>setPlace(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Consultation TIme</label>
                    <input type="text" className="form-control" placeholder="Enter time" value={consultation} onChange={(e)=>setConsultation(e.target.value)} />
                </div>
                {/* <div className="form-group">
                    <label>Description</label>
                    // {/* <input type="text" className="form-control description" placeholder="About your pet..." /> */}
                 {/* <textarea className="form-control description" placeholder="About your pet" value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea> */}
                    
                {/* </div> */} 
               
                <button type="submit" className="btn btn-primary btn-block" onClick={HandleSubmit}>Submit</button>
               
            </form>
</div>





 </div>
     )
}

export default Clinic;

