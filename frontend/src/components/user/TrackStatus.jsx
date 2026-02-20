import { useEffect, useState } from "react";
import axios from "axios";

export default function Status() {
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("complaintId");

    if (!id) return;

    axios
      .get(`http://localhost:8000/status/${id}`)
      .then(res => setComplaint(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!complaint) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Complaint Status</h2>
      <p><b>Issue:</b> {complaint.comment}</p>
      <p><b>Status:</b> {complaint.status}</p>
    </div>
  );
}