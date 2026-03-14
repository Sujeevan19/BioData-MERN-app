import {useState} from "react"
import API from "../services/api"

function Register(){

const [form,setForm] = useState({
name:"",
email:"",
password:""
})

const submit = async(e)=>{
e.preventDefault()

await API.post("/api/register",form)

alert("User Registered")
}

return(

<div>

<h2>Register</h2>

<form onSubmit={submit}>

<input placeholder="Name"
onChange={e=>setForm({...form,name:e.target.value})}/>

<input placeholder="Email"
onChange={e=>setForm({...form,email:e.target.value})}/>

<input placeholder="Password"
type="password"
onChange={e=>setForm({...form,password:e.target.value})}/>

<button>Register</button>

</form>

</div>

)

}

export default Register