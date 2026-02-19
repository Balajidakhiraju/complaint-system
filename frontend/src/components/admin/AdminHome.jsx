import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminHome() {
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8000/complaints")
      .then(res=>setData(res.data));
  },[]);

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h2>Admin Dashboard</h2>

      {data.map(c=>(
        <p key={c._id}>{c.comment}</p>
      ))}
    </div>
  );
}
