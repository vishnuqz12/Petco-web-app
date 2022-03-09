
import React,{useState,useEffect} from "react";
import Axios from "axios";
import "./care-taker.css";


function CareTaker(){
    const [CareTaker,setCare] = useState([]);

    useEffect(()=>{
      Axios.get("http://localhost:8000/api/newcaretakers")
      .then(res=>{
          console.log(res.data);
          setCare(res.data)
      })
     })

    function RenderData(care){
         
      return(
          <div className="newpetcare">
                                                    {/* <img src={petdata.file} alt="img" /> */}
                                                   <p><span>Care Centre</span> : {care.centre}</p>
                                                   <p><span>Name</span> : {care.yourname} </p>
                                                   <p><span>Price</span> : {care.price}</p>

                                                   <p><span>Contact</span> : {care.contact}</p>
                                                    <p><span>Place</span> : {care.place} </p>
                                                   <button>Book</button> 
          
                                       </div>
      )
     }

return(
 <div className="care-taker">

<nav class="navbar navbar-expand-sm bg-light">
      <h3 className="navbar-head">WELCOME TO PETCO Caretakers</h3>
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

{CareTaker.map((care) => RenderData(care))}




 </div>
)



 


}

export default CareTaker;