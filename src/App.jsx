import React, { createContext, useContext, useState } from "react";

const countContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <countContext.Provider value={{ count, setCount }}>
      {children}
    </countContext.Provider>
  );
}

function Increase() {
  const { count, setCount } = useContext(countContext);

  return (
    <button
      onClick={() => {
        setCount((current) => current + 1);
      }}
    >
      Increase
    </button>
  );
}

function Decrease() {
  const { count, setCount } = useContext(countContext);

  return (
    <button
      onClick={() => {
        setCount((current) => current - 1);
      }}
    >
      Decrease
    </button>
  );
}

function Value() {
  const { count, setCount } = useContext(countContext);

  return <div>{count}</div>;
}
function App() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

export default App;