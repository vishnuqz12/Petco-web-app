import React,{useState} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import "./customerlogin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Forgotpwd(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newpwd,setNewpwd] = useState("");


 
    function validateForm() {
            return newpwd.length>0 && password.length >0
   }
   function handleSubmit(event){
       event.preventDefault();
   }
    return(
<div className="Login">
            <h4 className="customerlogin">Forgot Password</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
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
          <Form.Group size="lg" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={newpwd}
              onChange={(e) => setNewpwd(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" className="btn" disabled={!validateForm()}>
            Login
          </Button>

        </Form>
      </div>
    )
}

export default Forgotpwd;