import React, { useState, useRef, useEffect, useCallback } from "react";
import { useHistory } from 'react-router-dom';

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
            // window.location.href = "http://localhost:3001/Home";       
            // useNavigate().push('/Home'); 
            navigate();
            
      }else{
          alert("Login failed !!");
      }
  }
  
  const history = useHistory();
const navigate = () => {
    history.push('/Home');
}

  return (
    <React.Fragment>
    
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
