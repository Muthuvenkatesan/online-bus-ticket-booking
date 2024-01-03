import React from 'react';
import '../Assets/Nav.css';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faSearch} from '@fortawesome/free-solid-svg-icons';
import icon from '../Assets/busicon.png';
import { Link } from '@mui/material';
//import { useNavigate } from 'react-router-dom';
export const Nav=()=>
{
    // const navigate= useNavigate();
    return(
        <div className='navbar'>

            <img src={icon} alt="" className='logo'/>
            <h1 className='H'>BUS</h1> <h1 className='L'>BOOKING</h1>

            <ul>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/Login'>Login</a></li>
          <a href='/About'>    <li>About</li></a>  
                <li>payment</li>
         
            </ul>
            <div className='search-box'>
                <input type="text" placeholder='Search'/>
            </div>
            {/* <button onClick={() => navigate('/LogIn')}>LOGIN</button> */}

        </div>
    )
}
export default Nav;