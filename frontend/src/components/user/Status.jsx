import { useLocation } from "react-router-dom";

export default function Status() {
  const location = useLocation();
  const complaint = location.state?.complaint;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Complaint Status</h2>

      {complaint ? (
        <div>
          <p><strong>Issue:</strong> {complaint}</p>
          <p>Status: Pending</p>
        </div>
      ) : (
        <p>No complaint submitted.</p>
      )}
    </div>
  );
}
