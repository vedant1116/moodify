import {useContext} from "react";
import {AuthContext} from "../auth.context";
import {login,register,getMe,logout} from "../services/auth.api"
import { useEffect } from "react";




export const useAuth = () => {
     const context=useContext(AuthContext)

     const {user,setUser,loading,setLoading}=context

     async function loginUser({email,username,password}){
        setLoading(true)
        const data= await login({email,username,password})
        console.log(data);
        setUser(data.user)
        setLoading(false)

     }

     async function registerUser({email,username,password}){
        setLoading(true)
        const data= await register({email,username,password})
        setUser(data.user)
        setLoading(false)
     }
 
     async function getMeUser(){
        setLoading(true)    
        const data= await getMe()
        setUser(data.user)
        setLoading(false)
     }

     async function logoutUser(){
     setLoading(true)
     const data= await logout()
     setUser(null)
     setLoading(false)
     }

     useEffect(()=>{
        getMeUser()
     },[])
   
  return (
    {user,loading,loginUser,registerUser,getMeUser,logoutUser}
  )
}

