import Display from "./components/Display/Display";
import Button from "./components/Button/Button";
import Hello from "./components/Hello/Hello";
import History from "./components/History/History";
import { useState } from "react";

// function App() {
  
//   const [counter, setCounter] = useState(0);

//   // const handleClick = () => {
//   //   console.log("clicked");
//   // }

//   const increment = () => setCounter(counter + 1);
//   const decrement = () => setCounter(counter - 1);
//   const zero = () => setCounter(0);


//   return (
//     <>
//       <Display counter={counter} />
//       <Button handleClick={increment} text="Plus"/>
//       <Button handleClick={decrement} text="Minus" />
//       <Button handleClick={zero} text="Zero"/>
//     </>
//   )
// }

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}

        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

export default App;
