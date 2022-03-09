import React,{useState} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link,useNavigate} from "react-router-dom";
import "./customerlogin.css";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Validator from "validator";

function Newcustomer(){
    // const [username,setUsername] = useState("");
    const [emailerr,setEmailerr] = useState("");
    const [pwderr,setPwderr] = useState("");
    const [error,setError] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

 

 
  //   function validateForm() {
  //           return email.length>0 && password.length >0
  //  }

  

   const navigate = useNavigate();
   const  handleSubmit = async (event)=>{
       event.preventDefault();

       if(password=="" || email=="" || username == ""){
        alert("Enter Valid Details ");
      }else{
            navigate("/customer");
            alert("Congrates you are successfully registered")

      }

       let data = {
         username:username,
         email:email,
         password:password
       }
       try {
        Axios.post("http://localhost:8000/api/newuser",data);
       } catch (error) {
         console.log("erroorrrrrrrrrrrrrrrrrrrrrrrrrrr"+error);
       }
       
      }

//  setEmailerr("");
// setPwderr("");
// if(input.email ==""){
// setEmailerr("Email not valid");
// return false;

// }else if(input.password <6){
// setPwderr("Password length min 6 ");
// return false;

// }else{

// alert("form submitted");
// navigate("/admin");

// }
     
    return(
        <div className="Login">
        <h4 className="customerlogin">Register</h4>
    <Form onSubmit={handleSubmit}>
    <Form.Group size="lg" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          name="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        
      </Form.Group>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          name ="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        {/* <p>{emailerr}</p> */}
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* <p>{pwderr}</p> */}
      </Form.Group>
      <Button block size="lg" type="submit" className="btn"  >
        Login
      </Button>



    </Form>
  </div>
    )
}

export default Newcustomer;
