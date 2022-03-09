
import React,{useState,useEffect} from "react";
import Axios from "axios";
import "./petclinic.css";


function Petclinic(){
    // const [Alldata,setAlldata] = useState([]);
    const [NewClinic,setClinic] = useState([]);

  
    useEffect(()=>{
      Axios.get("http://172.31.4.239:5000/api/petclinics")
      .then(res=>{
          console.log(res.data);
          setClinic(res.data)
      })
     })

        function RenderData(clinicdata){
         
                 
             
              return(
                  <div className="newclinic">
                                                            {/* <img src={petdata.file} alt="img" /> */}
                                                           <p><span>Name</span> : {clinicdata.drname}</p>
                                                           <p><span>Clinic</span> : {clinicdata.clinic} </p>
                                                           <p><span>Contact</span> : {clinicdata.contact}</p>
                                                            <p><span>Place</span> : {clinicdata.place} </p>
                                                            <p><span>Time</span> : {clinicdata.consultation}</p>
                                                           <button>Book</button> 
                  
                                               </div>
              )
             }

return(
 <div className="petclinic">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="navbar-head" >WELCOME TO PETCO Clinics</h3>
     {/* <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="/customer/clinics">
            Clinic
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/customer/caretakers">
            Care Taker
          </a>
      </li>
  </ul> */}
</nav>
{/* <div className="search-tag">
    <input type="search" placeholder="Search..." name="search" ></input>
    <button>submit</button>
</div> */}





{NewClinic.map((clinicdata) => RenderData(clinicdata))}

 </div>
)



 


}

export default Petclinic;
