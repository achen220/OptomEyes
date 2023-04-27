import React from 'react';
import Header from './Header.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx'
import ImageSlider from './ImageSlider.jsx';
import {createBrowserRouter, createRoutesFromElements, Route,Routes, Link, BrowserRouter} from 'react-router-dom';
export default function App () {
  // let component;
  // console.log('lil:', window.location)
  // switch (window.location.pathname) {
  //   case '/':
  //     component = <Home/>
  //     break
  //   case "/login":
  //     component = <Login />
  //     break
  //   case "/signup":
  //     component = <Signup />
  //     break
  // }
  return (
    <div>
      <Header/>
      <section className='mt-20 left-0 right-0 pt-10 h-f ull
        flex flex-row justify-evenly'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </section>
    </div>

  )
}
