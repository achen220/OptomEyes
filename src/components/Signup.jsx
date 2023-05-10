import React, { useState } from 'react';
import { redirect, useNavigate } from "react-router-dom";


export default function Signup () {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function postSignup () {
    const account = {username, email, password}
    try {
      let result = await fetch('http://localhost:8080/api/signUp',{
        method: 'post',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(account)
      })
      let data = await result.json();
      if (data) {
        console.log('data recieved from server:', data)
        setUsername("");
        setEmail("");
        setPassword("");
        return navigate("/Dashboard");
      }
    } catch (err) {
      console.log('error caught during signup, problem with response from server:', err)
      throw err;
    }
  }
  return (
    <form className='p-10 border-t border-b border-black flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold px-3 py-1 rounded'>Sign Up</h1>
      <br />
      <input className='px-3 py-1 rounded' type='username' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
      <br />
      <input className='px-3 py-1 rounded' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
      <br />
      <input className='px-3 py-1 rounded' type='password' value={password}onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
      <br />
      <input className='p-1 rounded text-centerpy-2 px-5 border border-black rounded text-center duration-300 hover:bg-red-50'
      type='button' value="SignUp and Login" onClick={postSignup} />
    </form>
  )
}