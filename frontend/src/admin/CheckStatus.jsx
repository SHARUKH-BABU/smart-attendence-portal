import React, { useState } from "react";
import Header from "../layout/header/Header";

const CheckStatus = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "sharukh", status: 1, time: "09:00 AM", mode: "Online" },
    { id: 2, name: "salman", status: 0, time: "09:10 AM", mode: "Offline" },
    { id: 3, name: "amir", status: 1, time: "09:15 AM", mode: "Online" },
    { id: 4, name: "saif", status: 0, time: "09:20 AM", mode: "Offline" },
    { id: 5, name: "akshay", status: 1, time: "09:30 AM", mode: "Online" },
    { id: 6, name: "hrithik", status: 0, time: "09:45 AM", mode: "Offline" },
    { id: 7, name: "ranbir", status: 1, time: "10:00 AM", mode: "Online" },
    { id: 8, name: "ranveer", status: 0, time: "10:15 AM", mode: "Offline" },
    { id: 9, name: "varun", status: 1, time: "10:30 AM", mode: "Online" },
    { id: 10, name: "ajay", status: 0, time: "10:45 AM", mode: "Offline" },
  ]);

  const [searchId, setSearchId] = useState("");
  const [filtered, setFiltered] = useState(students);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchId(value);

    if (value === "") {
      setFiltered(students);
    } else {
      const id = parseInt(value, 10);
      const result = students.filter((s) => s.id === id);
      setFiltered(result.length > 0 ? result : []);
    }
  };

  // Toggle manual attendance
  const handleCheckboxChange = (id) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status ? 0 : 1 } : s
      )
    );

    setFiltered((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status ? 0 : 1 } : s
      )
    );
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen py-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Search Section */}
          <div className="flex justify-start mb-6">
            <input
              type="number"
              value={searchId}
              onChange={handleSearch}
              placeholder="🔍 Search by Student ID"
              className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Table Section */}
          <h2 className="text-2xl font-semibold mb-4 text-center text-blue-900">
            Attendance Status
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-blue-100 text-gray-800">
                  <th className="border border-gray-300 px-4 py-2">Select</th>
                  <th className="border border-gray-300 px-4 py-2">ID</th>
                  <th className="border border-gray-300 px-4 py-2">Name</th>
                  <th className="border border-gray-300 px-4 py-2">Time</th>
                  <th className="border border-gray-300 px-4 py-2">Mode</th>
                  <th className="border border-gray-300 px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((student) => (
                    <tr
                      key={student.id}
                      className="text-center hover:bg-gray-100 transition-colors"
                    >
                      
                      <td className="border border-gray-300 px-4 py-2 font-medium">
                        {student.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.time}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {student.mode}
                      </td>
                      <td
                        className={`border border-gray-300 px-4 py-2 font-semibold ${
                          student.status ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {student.status ? "Present" : "Absent"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="checkbox"
                          checked={student.status === 1}
                          onChange={() => handleCheckboxChange(student.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-4 text-red-500 font-semibold"
                    >
                      ❌ No student found with ID {searchId}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckStatus;
