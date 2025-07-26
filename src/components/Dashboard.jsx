import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import AttendanceForm from "./AttendanceForm";
import Report from "./Report";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="bg-blue-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">📘 Student Attendance Tracker</h1>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition duration-200"
        >
          Logout
        </button>
      </header>
      <main className="p-6 max-w-4xl mx-auto">
        <AttendanceForm />
        <Report />
      </main>
    </div>
  );
};

export default Dashboard;
