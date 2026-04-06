import React, { useState } from 'react'
import { Link } from 'react-router'
import FormGroup from '../components/FormGroup'
import "../styles/login.scss"
import { useNavigate } from 'react-router'
import {useAuth} from '../hooks/useAuth'
const Login = () => {
  const {loading,loginUser}=useAuth()
  
  const navigate=useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
  e.preventDefault()
  await loginUser({email,password})
  navigate("/")
  }
  return (
    <main className='login-page'>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup label="Email"
                 placeholder="Enter your email" 
                 value={email}
                 onChange={(e)=>{setEmail(e.target.value)}}
                 />
                <FormGroup 
                label="Password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <button type="submit" className='button'>Login</button>
            </form>
              <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    </main>
  )
}

export default Login
