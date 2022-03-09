import React from "react";
import "./Home.css";

import PetImg from "../images/petcare.jpg"

function Home(){

    return(
        <div className="home">

    <nav class="navbar navbar-expand-sm bg-light">
      <h3 className="navbar-brand">PETCO</h3>
  
     <ul class="navbar-nav">
      {/* <li class="nav-item">
          <a class="nav-link" href="/adminlogin">
            Admin
          </a>
      </li> */}
      <li class="nav-item">
          <a class="nav-link" href="customerlogin">
            Customer
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/clinic">
            Clinic
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/caretaker">
            Care Taker
          </a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="/petmarket">
            Pet Market
          </a>
      </li>
  </ul>
</nav>

<img className="petcare-img" src={PetImg} alt="petimg" />

<p className="petcare-about">Proper pet care is the basis of responsible pet ownership. It is important when you adopt a pet to understand it is a lifetime commitment to a furry family member that depends on you for his or her health and well-being.</p>
   <p className="petcare-about">Happily, the unconditional love and joy that pets bring to our lives more than makes up for the added responsibility that comes with welcoming adding a furry child to your family. To ensure your pet’s health and happiness, following are the necessities that all responsible pet owners need to provide.</p>     
   
   <div className="home-footer">
        <h4 >Contact</h4>
   </div>
   
   
        </div>
    )
}
export default Home;