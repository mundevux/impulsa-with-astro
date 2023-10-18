"use client";
import React, { useState, useEffect } from "react";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < end) {
        setCount(count + 1);
      }
    }, 1);

    return () => clearInterval(intervalId);
  }, [count, end]);

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="text-xl md:text-3xl font-bold text-center text-amber-400 pb-2">
      {count < 1000 ? count : formatNumber(count)}
    </div>
  );
};

export default Counter;
