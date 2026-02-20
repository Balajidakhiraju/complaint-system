import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const register = async () => {
    await axios.post("http://localhost:8000/register",{
      name,email,password
    });
    alert("Registered Successfully");
    window.location.href = "/login";
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>Registration Page</h2>

      <input placeholder="Full Name" onChange={e=>setName(e.target.value)} />
      <br/><br/>

      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <br/><br/>

      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <br/><br/>

      <button onClick={register}>Register</button>
    </div>
  );
}
