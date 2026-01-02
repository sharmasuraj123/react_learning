import React, { useState, useEffect } from "react";

function usePostTitle() {
  const [post, setPost] = useState("");

  async function getpost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json.title);
    setPost(json.title);
  }

  useEffect(() => {
    getpost();
  }, []);
  return post;
}

export default usePostTitle;
