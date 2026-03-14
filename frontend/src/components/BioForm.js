import {useState} from "react"
import API from "../services/api"

function BioForm(){

const [form,setForm] = useState({
name:"",
age:"",
gender:"",
phone:"",
address:""
})

const submit = async(e)=>{

e.preventDefault()

await API.post("/bio-api",form)

alert("Bio added")

}

return(

<div>

<h2>Add Bio</h2>

<form onSubmit={submit}>

<input placeholder="Name"
onChange={e=>setForm({...form,name:e.target.value})}/>

<input placeholder="Age"
onChange={e=>setForm({...form,age:e.target.value})}/>

<input placeholder="Gender"
onChange={e=>setForm({...form,gender:e.target.value})}/>

<input placeholder="Phone"
onChange={e=>setForm({...form,phone:e.target.value})}/>

<input placeholder="Address"
onChange={e=>setForm({...form,address:e.target.value})}/>

<button>Add Bio</button>

</form>

</div>

)

}

export default BioForm