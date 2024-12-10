import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    
    <div className='container'>
    <h1>Signup</h1>
    <form action="">
       <input type ="text" placeholder='Enter user name'/>
       <br />
       <input type="password" placeholder='Eanter password'/>
       <br />
       <button type="submit" className="btn btn-primary">Signup</button>
    </form>
    <Link to={"/"}>back</Link>
   </div>
  )
}

export default Signup