import React, { useState, useEffect } from "react";

export const CountBtn = () => {
  const [countCard, setCountCard] = useState(0);
  const [countShop, setCountShop] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        document.querySelector(".btn-shop").addEventListener("click", () => {
        setCountShop([...countShop, countCard]);
      });
    }, 500);
  }, [countCard]);

  const allItemsBuy = countShop.reduce((a, b) => a + b, 0);
  document.querySelector(".count").innerHTML = allItemsBuy;

  const handleUp = () => {
    return setCountCard(countCard + 1);
  };

  const handleDow = () => {
    return setCountCard(countCard - 1);
  };

  return (
    <>
      <button className="btn" onClick={handleUp}>
        +
      </button>
      <span className="countCard">{countCard}</span>
      <button className="btn" onClick={handleDow}>
        -
      </button>
    </>
  );
};
