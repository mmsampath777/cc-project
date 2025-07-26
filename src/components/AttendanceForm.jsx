import React, { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function AttendanceForm() {
  const [className, setClassName] = useState("");
  const [date, setDate] = useState("");
  const [students, setStudents] = useState([{ name: "", present: false }]);

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "attendance"), {
        className,
        date,
        students
      });
      alert("Attendance saved!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const updateStudent = (index, field, value) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <input placeholder="Class Name" onChange={(e) => setClassName(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      {students.map((student, i) => (
        <div key={i}>
          <input
            placeholder="Student Name"
            value={student.name}
            onChange={(e) => updateStudent(i, "name", e.target.value)}
          />
          <label>
            Present:
            <input
              type="checkbox"
              checked={student.present}
              onChange={(e) => updateStudent(i, "present", e.target.checked)}
            />
          </label>
        </div>
      ))}
      <button onClick={() => setStudents([...students, { name: "", present: false }])}>Add Student</button>
      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
}

export default AttendanceForm;
