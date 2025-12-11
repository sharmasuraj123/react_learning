import React, { useState, useEffect } from "react";

// Boundary error

class BoundaryError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { havaAerror: false };
  }

  static getDerivedStateFromError(error) {
    return { havaAerror: true };
  }

  render() {
    if (this.tate.havaAerror) {
      return <div>Something went wrong.</div>;
    } else return this.props.children;
  }
}

function App() {
  return (
    <BoundaryError>
      <ErrorComponent></ErrorComponent>
    </BoundaryError>
  );
}

function ErrorComponent() {
  throw new Error("i caught a erroror.");
}

export default App;
