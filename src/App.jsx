import React, { useRef } from "react";

function App() {
  const reference = useRef(null);

  return (
    <>
      <input
        ref={reference}
        type="text"
        placeholder="write what yu want "
      ></input>
      <button
        onClick={() => {
          reference.current.focus();
        }}
      >click</button>
    </>
  );
}

export default App;