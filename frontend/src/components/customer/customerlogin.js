import React,{useState,useEffect} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from "react-router-dom";
import "./customerlogin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";


function Customerlogin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const [err,seterr] = useState("");
    // http://localhost:8000
   
   const navigate = useNavigate();
   const HandleSubmit = async (event)=>{
       event.preventDefault();
       Axios.get("http://localhost:8000/api/olduser").then((response)=>{
         console.log(response.data);
         if(response.data == password){
                  alert("successfully logged")
                  navigate("/customer")
         }else{
          //  seterr("difficult to find")
           alert("Please check your username or password")
         }
       })

   }


    return(
        <div className="Login">
            <h4 className="customerlogin">Customer Login</h4>
        <Form onSubmit={HandleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" className="btn" >
            Login
          </Button>

          {/* <div className="loginerr">{err}</div> */}
{/* <Link to="/forgotpwd"><p className="forgotpwd">Forgot Password!</p></Link> */}
<Link to="/newcustomer"><p className="forgotpwd">Register</p></Link>

        </Form>
      </div>
    )
}

export default Customerlogin;
