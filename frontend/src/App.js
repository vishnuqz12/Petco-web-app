import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import Home from "./components/Home";
  import Admin from "./components/Admin/admin";
  import AdminLogin from "./components/Admin/admin-login";
  import Customerlogin from "./components/customer/customerlogin";
  import Forgotpwd from "./components/customer/forgotpwd";
  import Newcustomer from "./components/customer/newcustomer";
  import Clinic from "./components/clinic/clinic";
  import Caretaker from "./components/caretaker/caretaker";
  import Customer from "./components/customer/customer";
  import Petclinic from "./components/customer/petclinic/petclinic";
  import CareTaker from "./components/customer/caretakers/care-taker";
  import Petmarket from "./components/Petmaket/petmarket";



const app = ()=>{
    return (
 
 <BrowserRouter>
 <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/adminlogin" element={<AdminLogin />} />
     <Route path="/customerlogin" element={<Customerlogin />} />
     <Route path="/forgotpwd" element={<Forgotpwd />} />
     <Route path="/newcustomer" element={<Newcustomer />} />
     <Route path="/clinic" element={<Clinic />} />
     <Route path="/caretaker" element={<Caretaker />} />

     <Route path="/customer" element={<Customer />} />
     <Route path="/customer/clinics" element={<Petclinic />} />
     <Route path="/customer/caretakers" element={<CareTaker />} />


     
     <Route path="/petmarket" element={<Petmarket />} />



     
     <Route path="/admin" element={<Admin />} />

 </Routes>
 </BrowserRouter>
    )
}

export default app;