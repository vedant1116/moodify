import React , {useState} from 'react'
import FormGroup from '../components/FormGroup'
import {Link} from 'react-router-dom'
import "../styles/register.scss"
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from 'react-router'
const Register = () => {
  const navigate=useNavigate()
 
  const {loading,registerUser}=useAuth()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e){
    e.preventDefault()
    await registerUser({email,username,password})
    navigate("/")
  }
  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <FormGroup 
            label="Name" 
            placeholder="Enter your name" 
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}/>
            <FormGroup 
            label="Email"
             placeholder="Enter your email" 
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}/>
            <FormGroup label="Password" placeholder="Enter your password" 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}/>
            <button type="submit" className='button'>Register</button>
        </form>
        <p>Already have an account? <Link href="/login">Login here</Link></p>
      </div>
    </main>
  )
}

export default Register
