import React, { useState, useRef, useEffect } from "react";

const AttandanceCode = ({ professorCode }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [confirmed, setConfirmed] = useState([false, false, false, false]);
  const [progress, setProgress] = useState(0);

  const timers = useRef([null, null, null, null]);

  const handleMouseDown = (idx, value) => {
    // start 5-second timer for that letter
    timers.current[idx] = setTimeout(() => {
      const newConfirmed = [...confirmed];
      newConfirmed[idx] = true;
      setConfirmed(newConfirmed);
    }, 5000);

    // set the letter immediately
    const newCode = [...code];
    newCode[idx] = value.toUpperCase();
    setCode(newCode);
  };

  const handleMouseUp = (idx) => {
    // cancel timer if released early
    clearTimeout(timers.current[idx]);
  };

  // update progress
  useEffect(() => {
    const confirmedCount = confirmed.filter(Boolean).length;
    setProgress((confirmedCount / 4) * 100); // fixed here
  }, [confirmed]);

  return (
    <div className="flex flex-col items-center space-y-6 mt-10">
      <h2 className="text-xl font-bold">Enter Attendance Code</h2>
      <div className="flex space-x-3">
        {code.map((c, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <input
              type="text"
              maxLength={1}
              value={c}
              className={`w-16 h-16 text-center text-black text-2xl border rounded ${
                confirmed[idx] ? "bg-green-300" : "bg-white"
              }`}
              readOnly
              onMouseDown={() => handleMouseDown(idx, professorCode[idx])}
              onMouseUp={() => handleMouseUp(idx)}
            />
            <p className="text-sm mt-1">
              {confirmed[idx] ? "Confirmed" : "Hold 5s"}
            </p>
          </div>
        ))}
      </div>

      <div className="w-64 h-6 bg-gray-300 rounded mt-4">
        <div
          className="h-6 bg-green-500 rounded"
          style={{ width: `${progress}%`, transition: "width 0.3s" }}
        ></div>
      </div>

      {progress === 100 && (
        <h3 className="text-green-700 font-bold mt-2">
          Attendance Submitted!
        </h3>
      )}
    </div>
  );
};

export default AttandanceCode;
