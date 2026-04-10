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
          
          <button className="btn" onClick={handleYes}>
            click me!!
          </button>
        </>
      ) : (
        <h1 className="result">zee balik na please</h1>
      )}
    </div>
  );
}

export default Gay;