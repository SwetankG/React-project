// import { React, useState } from "react";
// import {  } from "react-router-dom/dist/umd/react-router-dom.development";

// function Login() {
//      const [username, setUsername] = useState('');
//      const [password, setPassword] = useState('');
//     // const [navigate] = useNavigate()
//      const handleSu=(ev)=> {
//         ev.preventDefault();
      // if (username.trim() === '' || password.trim() === '') {
      //   alert('Please fill in all fields');
      //   return false;
      // }
//       else if(username === 'sw' || password === '12345678'){
//           alert("success")
//       }
//       else{
//           document.getElementById('msg').innerHTML= "*username or password incorrect."
//       }


    //   if (redirectToHome) {
    //       return <Redirect to="/home" />
    //   // Call login API here and handle the response
    // }


//     return (
//       <div>
//         <h1>Login Page</h1>
//         <form> 
//           <label>
//             Username:
//             <input
//               type="text"
//                value={username}
//                onChange={(ev) => setUsername(ev.target.value)}
//             />
//           </label>
//           <br />
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//              onChange={(ev) => setPassword(ev.target.value)}
//             />
//           </label>
//           <span id='msg' style={{color:"red"}}></span>
//           <br />
//           <input onClick={()=>handleSu} type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }

// export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password match
    if (username.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return false;
    }
    else if (username === 'sw' && password === '1234') {
      setLoggedIn(true);
    } else {
      document.getElementById('msg').innerHTML = "*username or password incorrect."
    }
  }

  // Redirect to home page if user is logged in
  if (loggedIn) {
    navigate('/contact');
  }
    //   if (redirectToHome) {
    //       return <Redirect to="/home" />
    //   // Call login API here and handle the response
    // }
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <span id='msg' style={{ color: "red" }}></span>
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
