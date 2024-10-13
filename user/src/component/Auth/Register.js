import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom' 

function Register() {
  return (
    <div className='register'>
    <div className='register-container'>
      <form className='form-register'>
      <h1 className='register-h1'>Register</h1>
      <div>
      <label htmlFor=''>
        Your Full Name
        <input type="text" placeholder='Enter your Name'/>
      </label>
      </div>
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
      <button type="submit"> Register</button>
      <div>
        <span>Already an Account is created<Link to="/Login">Create an Account</Link></span>
      </div>
      </form>
    
    </div>
      
  </div>
  );
}

export default Register