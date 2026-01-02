import React, { useState, useEffect, useRef } from "react";
export function usePrev(value) {
  const reference = useRef();
  useEffect(() => {
    reference.current = value;
  }, [value]);
  return reference.current;
}
// it will return first and then effect will be called.