import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
export default function Dashboard () {
  console.log('Dashboard invoked')
  // const [authentication, setAuthentication] = useState(null);
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("authentication");
  //   if (loggedInUser) {
  //     setAuthentication(loggedInUser);
  //   }
  //  }, []);
  
  //  if (!authentication) {
  //   return <Navigate to="/login" />;
  //  } else {
  return (
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
  );
  // }
}
