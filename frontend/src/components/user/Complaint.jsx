import { useState } from "react";
import axios from "axios";

export default function Complaint() {
  const [issue, setIssue] = useState("");

const submitComplaint = async () => {
  if (!issue) {
    alert("Please enter complaint");
    return;
  }

  try {
    const res = await axios.post("http://localhost:8000/complaint", {
      comment: issue
    });

    alert("Complaint submitted!");

    // store complaint id
    localStorage.setItem("complaintId", res.data.id);

    setIssue("");
  } catch (error) {
    alert("Error saving complaint");
  }
};
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Submit Complaint</h2>

      <textarea
        placeholder="Describe your issue"
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        rows="4"
        cols="40"
      />

      <br /><br />

      <button onClick={submitComplaint}>Submit</button>
      <br /><br />
      <button onClick={() => window.location.href="/status"}>
        Track Complaint
      </button>
    </div>
  );
}
