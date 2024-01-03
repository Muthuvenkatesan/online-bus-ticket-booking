import { Link } from 'react-router-dom';
import '../Assets/Login.css';

import React from 'react';
import Nav from './Nav';
function Login() {
  return (
    <div className="logini">
     <Nav/>
    <div>
   <form>
       <b>
   </b>
   <box>
    <h1><b>LOGIN</b></h1>
    
    <label><b>Enter Your UserName: </b>
      <input type = "text" class='imt'></input>
      </label>
      <br></br>
      <br></br>
    <label><b>Enter Your Email Id: </b>
      <input type = "text" class='imt'></input>
      </label>
      <br></br>
      <br></br>
    
      <label><b>Enter Your Password: </b>
        <input type ="password" class='imt'></input>
        </label>
        <br></br>
        <br></br>
    
        <label><b>Confirm Password: </b>
          <input type="password" class='imt'></input>
          </label>
          <br></br>  
          <br></br>

       <Link to='/Home'>  <button>Login</button></Link> 
        <h4>  <p>Don't have an account.please register....</p>
        </h4>
    <Link to='/Signup'>  <p>Signup</p></Link>  
          </box>
   </form>

    </div>
  
    </div>
  );
}

export default Login;