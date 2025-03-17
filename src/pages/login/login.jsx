import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
       <div className="card">
       <div className="left">
            <h1>Hello World.</h1>
            <p>Lorem ipsum is a commonly web development to fill to fill the empty spaces in a layout that do not yet have content.</p>
            <span>Dont you have an account?</span>
            <Link to={"/register"}>
            <button>Register</button>
            </Link>
        </div>

        <div className="right">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                
                <button>Login</button>
               
            </form>
        </div>
       </div>
      
    </div>
  )
}

export default Login
