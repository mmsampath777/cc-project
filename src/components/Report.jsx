import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function Report() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "attendance"));
      const data = snapshot.docs.map(doc => doc.data());
      setRecords(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Attendance Report</h2>
      {records.map((rec, idx) => (
        <div key={idx}>
          <h4>{rec.className} - {rec.date}</h4>
          <ul>
            {rec.students.map((s, i) => (
              <li key={i}>{s.name} - {s.present ? "Present" : "Absent"}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Report;
