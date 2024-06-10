import { useState } from "react";

export const StateUpdate = () => {
  const [counter, setState] = useState(0);

  return (
    <>
      <h1>useState excrecise</h1>
      <button onClick={() => setState(counter + 1)}>Klick</button>
      <p>Du har klickat: {counter} gånger</p>
    </>
  );
};
