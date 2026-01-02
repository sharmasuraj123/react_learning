// custom hooks

import { useState } from "react";
import { useFetch } from "../hooks/useFetch.js";

// import usePostTitle from "../hooks/usePostTitle";

// function App() {
//   const  post  = usePostTitle();
//   return <div>{post}</div>;
// }

// useFetch custom hooks.

function App() {
  const [currentPost, setcurrentPost] = useState(1);
  const { post, loader } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + currentPost,
    10 * 1000
  );
  if (loader) {
    return <div>loading...</div>;
  }
  return (
    <>
      <button
        onClick={() => {
          setcurrentPost(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setcurrentPost(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setcurrentPost(3);
        }}
      >
        3
      </button>
      <div>{JSON.stringify(post)}</div>
    </>
  );
}

export default App;
