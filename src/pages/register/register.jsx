import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <div className='login'>
       <div className="card">
       
            <div className="right">
                <h2>Register</h2>
                    <form>
                     <input type="text" placeholder='Username' />
                     <input type="email" placeholder='Email' />
                     <input type="password" placeholder='Password' />
                     <input type="text" placeholder='Name' />
                     
                     <button>Register</button>
                     
                     </form>
            </div>

             <div className="left">
                <h1>Manu Social.</h1>
                <p>Lorem ipsum is a commonly web development to fill to fill the empty spaces in a layout that do not yet have content.</p>
                <span>Do you have an account?</span>
                <Link to={"/login"}>
                    <button>Login</button>
                </Link>
                
             </div>
       </div>
      
    </div>
    </div>
  )
}

export default Register
