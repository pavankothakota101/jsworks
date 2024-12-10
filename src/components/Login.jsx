import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container'>
     <h1>Login</h1>
     <form action="">
        <input type ="text" placeholder='Enter user name'/>
        <br />
        <input type="password" placeholder='Eanter password'/>
        <br />
        <button type="submit" className="btn btn-primary">Login</button>
     </form>
     <p>if dontL<Link to={"/signup"}>Signup</Link></p>
    

    </div>
  )
}

export default Login