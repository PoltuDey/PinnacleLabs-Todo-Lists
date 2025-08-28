import React, { useEffect, useState } from "react";

export const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const clear = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(clear);
  }, []);

  return (
    <>
      <h2 className="text-center text-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-2 px-4 rounded-lg shadow-lg animate-pulse transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        {dateTime}
      </h2>
    </>
  );
};
