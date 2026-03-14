import { useState } from "react"
import API from "../services/api"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async(e)=>{

    e.preventDefault()

    const res = await API.post("/api/login",{email,password})

    localStorage.setItem("token",res.data.token)

    alert("Login successful")

}

return(

<div>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

)

}

export default Login