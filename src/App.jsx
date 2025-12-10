// import React from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = React.useState(0);
//   return (
//     <>
//      <span>hello</span>
//       <Button counter={count} setCounter={setCount}></Button>
//     </>
//   );
// }

// function Button(props) {
//   return (
//     <button
//     className="buttonfont"
//       onClick={() => {
//         props.setCounter(props.counter+1);

//       }}
//     >Counter {props.counter}</button>
//   );
// }

// Toggle messages .

import { React, use, useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Button> </Button>
      <Button> </Button>
      <Button> </Button>
    </>
  );
}

function Button() {
  const [count, setCount] = useState(0);
  const [istrue, setIstrue] = useState(false);

  return (
    <button
      className={`${istrue ? "redColor" : "blueColor"}`}
      onClick={() => {
        setCount(count + 1);
        setIstrue(!istrue);
      }}
    >
      counter {count}
    </button>
  );
}

export default App;
