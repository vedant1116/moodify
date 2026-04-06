import axios from "axios";

const api= axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true,
});


export async function login({email,username,password}){
   try{
    const response = await api.post("/api/auth/login",{
    email,username,password
   })
   console.log(response.data);
   
   return response.data
   }
   catch(err){
    console.log(err);
   }
}

export async function register({email,username,password}){
    const response= await api.post("/api/auth/register",{
        email,username,password
    })
    return response.data
}

export async function getMe(){
    const response =await api.get("/api/auth/get-me")
    return response.data

}
export async function logout(){
    const response = await api.post("/api/auth/logout")
    return response.data
}
