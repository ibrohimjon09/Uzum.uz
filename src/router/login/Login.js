import React from 'react'
import  './Login.css'

function Login() {
  return (
    <div className='login container'>
        <form className='login-form'>
            <h1>Login</h1>
            <input type="text" placeholder='Enter username...'/><br />
            <input type="number" placeholder='Enter password...'/><br />
            <button>Enter</button>
        </form>
    </div>
  )
}

export default Login