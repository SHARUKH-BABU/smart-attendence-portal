import React, { useState, useEffect } from "react";
import Header from "../layout/header/Header";
import { useNavigate } from "react-router-dom";

const AdminLayout = ({ children }) => 
{

    const mainKey = "ABCD";
    
    const navigate = useNavigate();

    const [students, setStudents] = useState([
        { id: 1, name: "sharukh", status: 1 },
        { id: 2, name: "salman", status: 0 },
        { id: 3, name: "amir", status: 1 },
        { id: 4, name: "saif", status: 0 },
        { id: 5, name: "akshay", status: 1 },
        { id: 6, name: "hrithik", status: 0 },
        { id: 7, name: "ranbir", status: 1 },
        { id: 8, name: "ranveer", status: 0 },
        { id: 9, name: "varun", status: 1 },
        { id: 10, name: "ajay", status: 0 },
    ]);

  const [time, setTime] = useState(5); // change to 120 for 2 min
  const [isRunning, setIsRunning] = useState(false);
  const [clickedStart, setClickedStart] = useState(false);

  // Format time mm:ss
  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleStart = () => {
    setClickedStart(true);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleSubmit = () => {
    setIsRunning(false);
    console.log("✅ Attendance submitted", students);
    // TODO: send students array to backend
    navigate("/admin/checkstatus");
  };

  // Countdown logic
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    if (time === 0 && isRunning) {
      setIsRunning(false);
      handleSubmit(); // auto-submit
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  // Toggle student status
  const toggleStudent = (idx) => {
    setStudents((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, status: s.status ? 0 : 1 } : s))
    );
  };

  return (
    <>
      <Header />
      <main>
        <div className="flex gap-4 w-full">
          {/* Students Section */}
          <div className="w-2/3 flex flex-col gap-4 p-4">
            <h2 className="text-lg font-semibold text-center">
              Student Attendance
            </h2>
            <div className="container flex flex-wrap justify-center w-1/2 gap-2 h-96 p-2 m-auto">
              {students.map((student, idx) => (
                <div
                    key={student.id}
                    className="relative group"
                    >
                    <div
                        className="w-7 h-7 border border-black rounded cursor-pointer"
                        onClick={() => toggleStudent(idx)}
                        style={{
                        backgroundColor: student.status ? "green" : "lightblue",
                        }}
                    ></div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
                        {student.name}
                    </div>
                    </div>

              ))}
            </div>
          </div>

          {/* Admin Operations */}
          <div className="w-1/3 flex gap-4 p-4 flex-col items-center">
            <h1 className="text-lg font-semibold text-center">
              Admin Operations
            </h1>
            {clickedStart && (
              <div className="text-center text-blue-900 mb-4 text-5xl bg-yellow-200 p-2 border border-black rounded w-1/2">
                <span className="font-semibold">{mainKey}</span>
              </div>
            )}
            <div className="w-4/8 mx-auto p-4 border rounded border-black flex flex-col items-center bg-gray-200">
              <h1 className="text-lg font-semibold text-center">Timer</h1>
              <div className="text-5xl font-bold">{formatTime(time)}</div>
              <div>
                {!clickedStart && (
                  <button
                    onClick={handleStart}
                    className="bg-green-800 text-white px-2 py-1 rounded-md m-2 w-20 hover:bg-green-600 hover:scale-105 transition-transform cursor-pointer"
                    disabled={isRunning || time === 0}
                  >
                    Start
                  </button>
                )}
                <button
                  onClick={handleStop}
                  className=" bg-red-500 text-white px-2 py-1 rounded-md m-2 w-20 hover:bg-red-700 hover:scale-105 transition-transform cursor-pointer"
                >
                  Stop
                </button>
                {clickedStart && (
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md m-2 w-20 hover:bg-blue-700 hover:scale-105 transition-transform cursor-pointer"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
