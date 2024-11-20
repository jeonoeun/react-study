import React, { useCallback, useEffect, useState } from "react";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`);
  },[]);
  return (
    <li className="habit">
      <span className="habit-name">Coding</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
