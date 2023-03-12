import "../styles/login.css"
import React, { useState } from 'react'
import { Button, FormLabel, Input } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext"; 

const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const navigate=useNavigate()

  const handleData=()=>{
    let obj={
      email,
      password
    }
 if(obj.email=="foo" && obj.password=="bar"){
    alert("login successfull")
    toggleAuth()
    if(isAuth){
      navigate("/home")
    }

 }else{
    alert("Wrong credential")
 }
    
      }
      console.log(isAuth)
  return (
    <div>
    
    <div className='box'>
      <p>login</p>
     
    <FormLabel>Email :</FormLabel>
<Input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" />
<FormLabel>Password :</FormLabel>
<Input type='password' onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
<button className='btn' onClick={handleData}>login</button>

     </div>
    
     </div>
  )
}

export default Login