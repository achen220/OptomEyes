import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx'
export default function Navbar () {
  return (
    <nav>
    <ul className='inline-flex text-center'>
      <Link to="/" className='m-auto'> Home </Link>
      <Login />
      {/* <CustomLink to="/login"> Login </CustomLink>
      <CustomLink to="/signup"> SignUp </CustomLink> */}
    </ul>
    </nav>
  )
}

// function CustomLink({to, children, ...props}) {
//   const path = window.location.pathname;
//   return (
//     <li className={ path === to ? "active m-3 duration-300 hover:font-bold" : "m-3 duration-300 hover:font-bold"}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }