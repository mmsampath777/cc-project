import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h2>Welcome Teacher</h2>
      <button onClick={() => navigate("/attendance")}>Mark Attendance</button>
      <button onClick={() => navigate("/report")}>View Report</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
