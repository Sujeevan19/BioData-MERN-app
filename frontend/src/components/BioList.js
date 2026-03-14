import {useEffect,useState} from "react"
import API from "../services/api"

function BioList(){
    const [bios,setBios] = useState([])
    
    
const getBios = async()=>{

    const token = localStorage.getItem("token")

    if(!token) return

    const res = await API.get("/bio-api")

    setBios(res.data)
}

useEffect(()=>{
    getBios()
},[])

const del =  async(id)=>{
    await API.delete("/bio-api/"+id)
    getBios()
}
    
    
    
return(

<div>

<h2>Bio List</h2>

{bios.map(b=>(

<div key={b._id}>

<h3>{b.name}</h3>
<p>{b.age}</p>
<p>{b.gender}</p>

<button onClick={()=>del(b._id)}>Delete</button>

</div>

))}

</div>

)


return(

<div>

<h2>Bio List</h2>

{bios.map(b=>(

<div key={b._id}>

<h3>{b.name}</h3>
<p>{b.age}</p>
<p>{b.gender}</p>

<button onClick={()=>del(b._id)}>Delete</button>

</div>

))}

</div>

)
}

export default BioList