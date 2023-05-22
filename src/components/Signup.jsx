import React, { useState } from 'react';
import { redirect, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'

export default function Signup () {

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function postSignup () {
    const account = {username, email, password}
    console.log(`username:${username} email:${email} password:${password}`)
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
    <form className='p-10 border-l border-r border-black flex flex-col justify-center items-center '
      onSubmit={handleSubmit(postSignup)}>
      <h1 className='text-2xl font-bold px-3 py-1 rounded'>Sign Up</h1>
{/* this is the input for username that is a required field with a min legnth of 5 */}
      <input className='px-3 py-1 rounded'
        {...register('username',{
          required:true,
          minLength: 5,
          onChange: (e) => setUsername(e.target.value)
        })}
        name='username'
        placeholder='Username'
        />
{/* allow for conditional rendering; render the div if username has a length less than five and the input is already clicked */}
      {errors.username &&
        <div className='notification'>Username is required and must be at least 5 characters long.</div>
      }

      <br />
{/* input field for email that is required and needs to have an @ symbol */}
      <input className='px-3 py-1 rounded' 
        {...register('email',{
          required:true,
          onChange: (e) => setEmail(e.target.value),
          validate: () => {
            if (email.includes('@')) return true;
            else return false;
          }})
        }
        name='email'
        placeholder='email'
      />
        { errors.email &&
          <div className="notification">Must be a valid email</div>
        }
      <br />
{/* configure settings for email, is a required field, at least 8 char long, and must attain to pattern desgin */}
      <input className='px-3 py-1 rounded' 
        {...register('password',{
          required:true,
          minLength: 8,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).+$/,
          onChange: (e) => setPassword(e.target.value)
        })}
        type='password'
        value={password} 
        placeholder='password'/>
        { errors.password  && (
          <div className="notification">Password must contain at least 1 symbol, number, capital and lowercase letter</div>
        )}
      <br />
      <input className='p-1 rounded text-centerpy-2 px-5 border border-black rounded text-center duration-300 hover:bg-red-50'
      type='submit' 
      value="SignUp and Login" />
    </form>
  )
}