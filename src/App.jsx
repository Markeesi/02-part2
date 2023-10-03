import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import Hello from "./components/Hello/Hello";
import { useState } from "react";

function App() {
  
  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   console.log("clicked");
  // }

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const zero = () => setCounter(0);


  return (
    <>
      <Display counter={counter} />
      <Button handleClick={increment} text="Plus"/>
      <Button handleClick={decrement} text="Minus" />
      <Button handleClick={zero} text="Zero"/>
    </>
  )
}

export default App;
