import React, { useState } from "react";
import "./gay.css";

function Gay() {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <div className="container">
      {!answered ? (
        <>
          <h1 className="question">Are you a man?</h1>
          <button className="btn" onClick={handleYes}>
            Yes
          </button>
        </>
      ) : (
        <h1 className="result">You are gay bitch</h1>
      )}
    </div>
  );
}

export default Gay;