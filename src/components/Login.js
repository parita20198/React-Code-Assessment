import React, { useState, useRef, useEffect, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
    // useHistory
} from "react-router-dom";

function Login (props) {
  const [homeFlag, sethomeFlag] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loader = useRef(null);

  const handleChange = (e) => {
      if(e.target.name == "username"){
            setUsername(e.target.value);
      }else{
            setPassword(e.target.value);
      }
    
  };

  const onSubmit = (e) => {
      if(username == "foo" && password == "bar"){
            //   alert("Login success !!");
            //   window.location.href = "/Home";
            //   let history = useHistory();
            //   history.push('/Home')
            // sethomeFlag(true);
            //  <Navigate to="/Home"/>
            window.location.href = "http://localhost:3001/Home";
            // props.history.push("/Home");
      }else{
          alert("Login failed !!");
      }
  }

// render(){
    // if(homeFlag){
    //     <Navigate to="/Home"/>
    // }
  return (
    <React.Fragment>
    {/* <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label>Username</Form.Label>    
            <Form.Control type="text" placeholder="Enter username" />
            
            <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            />  
            </Form.Group> 
    </Form> */}
    
        <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={e=>handleChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={e=>handleChange(e)}/>
                </div>
                
                <button className="btn btn-primary btn-block" onClick={e=>onSubmit(e)}>Submit</button>                
            </form>
    </React.Fragment>
  );
// }
}

export default Login;