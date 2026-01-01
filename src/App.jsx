import React, { useRef, useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const reference = useRef(null);

  // useEffect(() => {
  //   reference.current = setInterval(() => {
  //     setTime((current) => current + 1);
  //   }, 1000);
  // }, []);

  return (
    <>
      <h1>Timer: {time}</h1>
      <button
        id="start"
        onClick={() => {
          reference.current = setInterval(() => {
            setTime((current) => current + 1);
          }, 1000);
        }}
      >
        start
      </button>
      <button
        id="stop"
        onClick={() => {
          clearInterval(reference.current);
        }}
      >
        stop
      </button>
    </>
  );
}
export default Timer;
