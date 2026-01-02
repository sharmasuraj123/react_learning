import useDebounce from "../hooks/useDebounce";
import { useEffect,useState } from "react";

function App() {
  const[inputValue,setInputValue] = useState("");
  const DebounceValue = useDebounce(inputValue, 300);
  useEffect(() => {
     if (!DebounceValue) return;
    async function senddata() {
      const data = await fetch(
        "api.amazon.com/search/" 
      );
      console.log("hello")
      
    }
    senddata();
  }, [DebounceValue]);

  
 function Change(e){
  setInputValue(e.target.value)
 }
  return (
    <>
      <input type="text"  onChange={Change} />
      
    </>
  );
}

export default App;
