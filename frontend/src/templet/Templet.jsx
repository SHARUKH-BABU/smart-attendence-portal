import React, { useState, useRef, useEffect } from "react";

const Templet = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const [holding, setHolding] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const mainKey = "ABCD"; // the correct key
  const [isPresent, setIsPresent] = useState(false); // example presence state

  const handleChange = (e, idx) => {
    const val = e.target.value.slice(-1).toUpperCase(); // only last char, uppercase
    const newCode = [...code];

    // Prevent same as previous input
    if (idx > 0 && val === newCode[idx - 1]) {
      e.target.value = ""; // clear wrong entry
      return;
    }

    newCode[idx] = val;
    setCode(newCode);

    // auto-focus next input
    if (val && idx < 3) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const startProgress = () => {
    setHolding(true);
    setProgress(0);

    let p = 0;
    intervalRef.current = setInterval(() => {
      p += 2; // speed of progress
      if (p >= 100) {
        p = 100;
        clearInterval(intervalRef.current);
        setSuccess(true);

        // check match with mainKey
        const enteredKey = code.join("");
        if (enteredKey === mainKey) {
          setIsPresent(true);
          setMessage("✅ Attendance Taken!");
        } else {
          setMessage("❌ No such key exists!");
        }
      }
      setProgress(p);
    }, 50);
  };

  const handleKeyDown = () => {
    if (
      code.every((c) => c !== "") && // all filled
      new Set(code).size === 4 && // all unique
      !holding &&
      !success // don’t restart if already successful
    ) {
      startProgress();
    }
  };

  const handleKeyUp = () => {
    clearInterval(intervalRef.current);
    setHolding(false);

    if (!success) {
      // reset if not successful
      setProgress(0);
      setCode(["", "", "", ""]);
      inputsRef.current[0]?.focus(); // focus first input again
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="flex flex-col items-center space-y-4"
      tabIndex={0} // make div focusable
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <h2 className="text-lg font-bold">Enter Code:</h2>
      <h3 className="text-xl tracking-widest">{code.join("")}</h3>

      <div className="flex space-x-2">
        {code.map((c, idx) => (
          <input
            autoFocus={idx === 0} // auto-focus first input
            key={idx}
            ref={(el) => (inputsRef.current[idx] = el)}
            type="text"
            maxLength={1}
            value={c}
            onChange={(e) => handleChange(e, idx)}
            className="w-12 h-12 text-center border rounded text-lg font-semibold"
            disabled={success} // lock inputs on success
            style={{ color: `${isPresent ? "green" : "black"}` , border: `${isPresent ? "2px solid green" : "1px solid gray"}`}}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar h-3 w-64 bg-gray-300 rounded overflow-hidden">
        <div
          className="progress h-full bg-blue-800 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {success && (
        <p
          className={`font-semibold mt-2 ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Templet;
