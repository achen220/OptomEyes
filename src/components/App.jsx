import React from 'react';
import Header from './Header.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx'
import ImageSlider from './ImageSlider.jsx';
import {createBrowserRouter, createRoutesFromElements, Route, Link, BrowserRouter} from 'react-router-dom';
export default function App () {
  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = <Home/>
      break
    case "/login":
      Component = <Login />
      break
    case "/signUp":
      Component = <Signup />
      break

  }
  return (
    <div>
      <Header/>
      <section className='mt-20 left-0 right-0 pt-10 h-full
        flex flex-row justify-evenly'>
        {Component}
      </section>
    </div>

  )
}
