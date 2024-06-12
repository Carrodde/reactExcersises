import { useState } from "react";

export const Adding = () => {
  const [xNumber, setXNumber] = useState(0);
  const [yNumber, setYNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleResult = () => {
    setResult(xNumber + yNumber);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setXNumber(parseInt(e.target.value));
        }}
        value={xNumber}
      />
      <input
        type="text"
        onChange={(e) => {
          setYNumber(parseInt(e.target.value));
        }}
        value={yNumber}
      />
      <button onClick={handleResult}>Beräkna</button>
      <div>
        <h2>Resultat: {result}</h2>
      </div>
    </>
  );
};
