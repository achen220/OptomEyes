import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login () {
  const navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [authentication, setAuthentication] = useState(localStorage.getItem("authentication")|| null);
  function postLogin (e) {
    e.preventDefault();
    const enteredInfo = {enteredUsername, enteredPassword};
    setEnteredUsername("");
    setEnteredPassword("");
    fetch('http://localhost:8080/api/login',{
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(enteredInfo)
    }).then(res => res.json())
    .then(data => {
      // setAuthentication(true)
      // localStorage.setItem("authentication", true);
      if (data.id) {
        navigate("/dashboard");
      } else {
        alert("incorrect login or password");
      }

    })
    .catch((err) => console.log('err:',err))
  }
  return (
    <form className='p-10 flex flex-row justify-center items-center'
    onSubmit={postLogin}>
      <input className='px-5 py-3 mx-3 rounded' type='username' value={enteredUsername} onChange={(e)=>setEnteredUsername(e.target.value)} placeholder='username'/>
      <input className='px-5 py-3 mx-3 rounded' type='password' value={enteredPassword} onChange={(e)=>setEnteredPassword(e.target.value)} placeholder='password'/>
      <input className='px-5 py-3 mx-3 border border-black rounded text-center duration-300 hover:bg-red-50' type='submit' value="Login" placeholder='Login'/>
    </form>
  )
}