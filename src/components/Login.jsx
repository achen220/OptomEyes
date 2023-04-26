import React, { useState } from 'react';

export default function Login () {

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  async function postLogin () {
    const enteredInfo = {enteredUsername, enteredPassword};
    let loginAttempt = await fetch('http://localhost:8080/api/login',{
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(enteredInfo)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    setEnteredUsername("");
    setEnteredPassword("");
  }
  return (
    <form className='p-10 border-t border-b border-black flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold px-3 py-1 rounded'>Login</h1>
      <br />
      <input className='px-3 py-1 rounded' type='username' value={enteredUsername} onChange={(e)=>setEnteredUsername(e.target.value)} placeholder='username'/>
      <br />
      <input className='px-3 py-1 rounded' type='password' value={enteredPassword} onChange={(e)=>setEnteredPassword(e.target.value)} placeholder='password'/>
      <br />
      <input className='py-2 px-5 border border-black rounded text-center duration-300 hover:bg-red-50'
      type='button' value="Login" onClick={postLogin} placeholder='Login'/>
    </form>
  )
}