
import React,{useState,useEffect} from "react";
import Axios from "axios";
import "./customer.css";


function Customer(){

    const [Alldata,setAlldata] = useState([])

   useEffect(()=>{
    Axios.get("http://localhost:8000/api/petmarket")
    .then(res=>{
        console.log(res.data);
        setAlldata(res.data)
    })
   })

   function RenderData(petdata){
    //    for (let i = 0; i <= petdata.length; i++) {
    //        const element = Alldata[i];
           
       
        return(
            <div className="petData">
                                                      {/* <img src={petdata.file} alt="img" /> */}
                                                     <p>Breed : {petdata.breed}</p>
                                                     <p>Age : {petdata.age} </p>
                                                     <p>Contact : {petdata.contact}</p>
                                                      <p>place : {petdata.place} </p>
                                                      <p>Description : {petdata.description}</p>
                                                     <button>Buy</button> 
            
                                         </div>
        )
       }
   
  


   

return(
 <div className="customer">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="navbar-head">WELCOME TO PETCO</h3>
     <ul class="navbar-nav">
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
  </ul>
</nav>
{/* <div className="search-tag">
    <input type="search" placeholder="Search..." name="search" ></input>
    <button>submit</button>
</div> */}

{Alldata.map((petdata) => RenderData(petdata))}




 </div>
)



 


}

export default Customer;