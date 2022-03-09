import React,{useState} from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./Adminlogin.css";
import {Link,useNavigate} from "react-router-dom";


function AdminLogin(){

   const [id,setid] = useState("");
   const [error,seterror] = useState("");

const navigate = useNavigate();

  function onSubmit(event){
      event.preventDefault();
      let adminid = ["anusha","akshaja","amala","gayathri"]
      let admin = adminid[0] || adminid[1] || adminid[2] || adminid[3];
        if (id == admin) {
            navigate("/admin")
        } else {
            seterror("Enter valid admin id");
        }
  }

    return(
<div className="admin-login">
          <form onSubmit={onSubmit}>
                <h3>Admin Login</h3>
                <div className="form-group">
                    <label>Admin id</label>
                    <input type="text" className="form-control" placeholder="Enter id" value={id} onChange={(e)=>setid(e.target.value)} />
                </div>
                <div className="iderror">{error}</div>
            
               
                <button  type="submit" className="btn btn-primary btn-block" >submit</button>
                
            </form>
</div>
    )
}

export default AdminLogin;