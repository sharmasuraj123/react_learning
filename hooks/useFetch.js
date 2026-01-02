import React, { useState, useEffect } from "react";

export function useFetch(url, timeline) {
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(true);
  async function getpost() {
    setLoader(true);
    const response = await fetch(url);
    const json = await response.json();
    setPost(json);
    setLoader(false);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getpost;
    }, timeline);
    return clearInterval(interval);
  }, [timeline]);

  useEffect(() => {
    getpost();
  }, [url]);
  return { post,loader };
}
