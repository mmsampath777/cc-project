import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

const AttendanceForm = () => {
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const [present, setPresent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!className || !date || !present) {
      alert("Please fill all fields");
      return;
    }
    await addDoc(collection(db, "attendance"), {
      className,
      date,
      present: present.split(",").map((s) => s.trim()),
    });
    setClassName("");
    setDate("");
    setPresent("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8 transition hover:shadow-lg">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">📝 Mark Attendance</h3>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Class (e.g., 10A)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          rows="3"
          placeholder="Comma-separated present student names"
          value={present}
          onChange={(e) => setPresent(e.target.value)}
          className="p-2 border rounded focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AttendanceForm;
