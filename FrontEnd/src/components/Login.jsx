import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="background">
        <div className="login">
        
          <h1>Infinity Canteen</h1>
          <input type = "text" placeholder='Enter your college ID'></input>
          <input type = "text" placeholder='Enter your password'></input>
          <a href="#" className="password">
            Forgot Password ?
          </a>
          <button className="Signin">
            Sign-in
          </button>
            
           <p>Not yet created account?<a href="http://localhost:5173/signin">Create your account</a></p>
          
        </div>  
      </div>
    </div>
  )
}

export default Login
