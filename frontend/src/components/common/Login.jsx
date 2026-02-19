import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:8000/login",{email,password});
    if(res.data.email){
      alert("Login Successful");
    }else{
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>Login Page</h2>

      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <br/><br/>

      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <br/><br/>

      <button onClick={login}>Login</button>
    </div>
  );
}
