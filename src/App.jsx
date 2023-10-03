import Hello from "./components/Hello/Hello";
import { useState } from "react";

function App() {
  
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("clicked");
  // }

  const increment = () => setCounter(counter + 1);
  const zero = () => setCounter(0);


  return (
    <>
      <div>{counter}</div>
      <button onClick={increment}>Plus</button>
      <button onClick={zero}>Zero</button>
    </>
  )
}

export default App;
