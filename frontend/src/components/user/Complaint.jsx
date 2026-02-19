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
      await axios.post("/complaint", {
        comment: issue
      });

      alert("Complaint saved to database!");
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
    </div>
  );
}
