// import { useEffect, useState } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       });

//   }, [])

//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
// <br />
//     {loading ? "Loading..." : tabData.title}
//   </div>
// }

// export default App

import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [data, setdata] = useState({});
  const [loader, setLoder] = useState(true);

  useEffect( () => {
    setLoder(true);
    async function Fetchdata() {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + currentTab
      );
      const json = await data.json();
      setdata(json);
      setLoder(false);
    }
    Fetchdata();
  }, [currentTab]);
  return (
    <>
      <Button currentTab={currentTab} setCurrentTab={setCurrentTab}></Button>
      <div>{loader ? "...loading" : `${JSON.stringify(data)}`}</div>
    </>
  );
}

function Button(props) {
  return (
    <>
      <button
        onClick={() => props.setCurrentTab(1)}
        style={{ color: props.currentTab == 1 ? "red" : "black" }}
      >
        todo#1
      </button>
      <button
        onClick={() => props.setCurrentTab(2)}
        style={{ color: props.currentTab == 2 ? "red" : "black" }}
      >
        todo#2
      </button>
      <button
        onClick={() => props.setCurrentTab(3)}
        style={{ color: props.currentTab == 3 ? "red" : "black" }}
      >
        todo#3
      </button>
    </>
  );
}

export default App;
