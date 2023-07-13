import React,{useEffect, useState} from 'react';
import { signIn } from '../redux/actions/userActions';

import { Routes ,Route } from 'react-router-dom';
import '../App.css';
import { register } from '../redux/actions/userActions';

function Login (){
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const[name,setname] = useState("");
  const[age,setage] = useState("");
  const[blood_group,setblood_group] = useState("");
  const[city,setcity] = useState("");
  const[state,setstate] = useState("");
  const[pincode,setspincode]= useState("");
  const[location_coordinates,setlocation_coordinates] = useState("");

   function submit(){
    console.log(email);
    register(email,password,name,age,blood_group,city,state,pincode);
   }

   return ( <>
    
 
    < HEAD />
     <div className="Login">
 
 <html>
 <head>
     <title>Slide Navbar</title>
     <link rel="stylesheet" type="text/css" href="slide navbar style.css"/>
 <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"/>
 </head>
 <body>
     <div class="main">  	
         <input type="checkbox" id="chk" aria-hidden="true"/>
             
             <div class="signup">
                 <form>
                     
                     <label for="chk" aria-hidden="true">Register</label>
                     <div class='signup_form'>
                     <input type="text" name="txt" placeholder="User name" required=""/>
                     <input type="email" name="email" placeholder="Email" required=""/>
                     <input type="password" name="pswd" placeholder="Password" required=""/>
                     </div>
                     <button>Sign up</button>
                 </form>
             </div>
 
             <div class="login">
                 <form>
                     <label for="chk" aria-hidden="true">Login</label>
                     <input type="email" name="email" placeholder="Email" required=""/>
                     <input type="password" name="pswd" placeholder="Password" required=""/>
                     <button>Login</button>
                 </form>
             </div>
     </div>
 </body>
 </html>
 
 </div>
 </>

  )}
