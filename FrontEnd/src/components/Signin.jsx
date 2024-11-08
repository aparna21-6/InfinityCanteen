import React from 'react'

const Signin = () => {
  return (
    <div>
      <div className="background">
        <div className="create">
          <h1>Infinity Canteen</h1>
          <input type = "text" placeholder='Enter your Name'></input>
          <input type = "text" placeholder='Enter your College ID'></input>
          <input type = "text" placeholder='Create password'></input>
          <input type = "text" placeholder='Confirm password'></input>
          
          <button className="Account">
            Create your Account
          </button>
          <div classname="*">
            
           <p>Already have an account?<a href="http://localhost:5173/">Sign in to your account</a></p>
          </div>
        </div>  
      </div>

    </div>
  )
}

export default Signin
