import '../Assets/Signup.css';
import React from 'react';
import Nav from './Nav';
function Signup() {

  return(
    <div className="sign">
   <Nav/>
    <div>
   
        <center>
    <h1>REGISTER</h1> 
   
    

    
    <form class="form">
      <h3>
    <br></br>
    <lable>First Name : </lable>
<input type="text" class ='imt'></input>

    <br></br>
    <br></br>
    
    <lable>Last Name : </lable>
    
<input type="text" class ='imt'></input>

    
    <br></br>
    <br></br>
    
    
    <lable>Email Id : </lable>
<input type="text" class ='imt'></input>

    <br></br>
    <br></br>
   
    
    <lable>Phone Number : </lable>
<input type="text" class ='imt'></input>

<br></br>
<br></br>

 
    <lable>Age : </lable>
<input type="number" class ='imt'></input>

<br></br>
<br></br>

   
    <lable>Gender : </lable>
<input type="number" class ='imt'></input>

<br></br>
<br></br>

    <lable>Location : </lable>
   
<input type="text" class ='imt'></input>

<br></br>
<br></br>
    
    
  

   </h3>
<button type='register'>Register</button>

</form>
    
    </center>
    </div>
    </div>
  );
}

export default Signup;