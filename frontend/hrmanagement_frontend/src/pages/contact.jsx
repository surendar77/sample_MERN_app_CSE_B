import { useState } from "react"
function Contact(){
   const [name,setName]=useState("");   
   const [age,setAge]=useState(18);
   const SubmitForm=(event)=>{
    event.preventDefault();
     console.log(name);
     console.log(age)
   }
 return(
    <div>
        <h1>Contact Us</h1>
        <form onSubmit={SubmitForm}>
            <input type="text" value={name} 
                  onChange={(event)=>setName(event.target.value)} 
                  placeholder="Enter name"></input><br/><br/>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
 )
}
export default Contact