import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
      <div className='login-container'>
        <form className='form'>
        <h1 className='login-h1'>Login</h1>
        <div>
        <label htmlFor=''>
          Your Email
          <input type="email" placeholder='Enter your email'/>
        </label>
        </div>
        <div>
        <label htmlFor=''>
          Your Password
          <input type="password" placeholder='Enter your password'/>
        </label>
        </div>
        <div>
          <div>
            <input type='checkbox' name="" id=""/>
            <label htmlFor="Remember Me"></label>
          </div>
          <span>Forget password</span>
        </div>
        <button type="submit"> Login</button>
        <div>
          <span>New here?<Link to="Register">Create an Account</Link></span>
        </div>
        </form>
      
      </div>
        
    </div>
  )
}

export default Login