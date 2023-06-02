import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const time = ` ${hours}:${minutes} | ${seconds}`;

      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const date = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonthName = monthNames[date.getMonth()];

    setCurrentMonth(currentMonthName);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-52 text-l text-center text-gray-800 bg-white p-2 rounded-lg shadow animate-sand-clock">
        {currentTime} | <span className="mx-1">{currentMonth}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
