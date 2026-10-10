import { useState } from "react"
function Contact(){
   const [name,setName]=useState("");   
   const SubmitForm=(event)=>{
    event.preventDefault();
     console.log(name);
   }
 return(
    <div>
        <h1>Contact Us</h1>
        <form onSubmit={SubmitForm}>
            <input type="text" value={name} 
                  onChange={(event)=>setName(event.target.value)} 
                  placeholder="Enter name"></input><br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
 )
}
export default Contact