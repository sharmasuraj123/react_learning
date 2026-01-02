// import { useState, useRef, useEffect } from "react";
// import { useFetch } from "./useFetch";


// export function useDebounce(SendRequestTothebackend) {
//     const clock = useRef(null);

//   function fn() {
//     clearTimeout(clock.current);
//     clock.current = setTimeout(SendRequestTothebackend, 300);
//   }

//   return fn;
// }


import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        console.log("debounce")

        return () => {
            clearTimeout(handler);
            console.log("clear clock")
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
