import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Report = () => {
  const [report, setReport] = useState([]);

  const fetchData = async () => {
    const snapshot = await getDocs(collection(db, "attendance"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setReport(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">
        📊 Attendance Reports
      </h3>
      {report.length === 0 ? (
        <p className="text-gray-500">No attendance marked yet.</p>
      ) : (
        <ul className="space-y-2">
          {report.map((item) => (
            <li
              key={item.id}
              className="bg-gray-50 p-4 rounded shadow-sm flex justify-between hover:bg-gray-100 transition"
            >
              <div>
                <strong>{item.className}</strong> – {item.date}
              </div>
              <div className="text-sm text-gray-600">
                ✅{" "}
                {Array.isArray(item.present)
                  ? item.present.join(", ")
                  : "No data"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Report;
