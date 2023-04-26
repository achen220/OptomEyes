import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar () {
  return (
    <nav>
    <ul className='inline-flex'>
      <li className='m-3 duration-300 hover:font-bold'>
       <CustomLink href="/login"> Login </CustomLink>
      </li>
      <li className='m-3 duration-300 hover:font-bold'>
        <CustomLink href="/signUp"> SignUp </CustomLink>
      </li>
    </ul>
    </nav>
  )
}

function CustomLink({href, children, ...props}) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  )
}