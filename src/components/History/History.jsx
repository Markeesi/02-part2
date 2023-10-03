const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  
  const App = () => {
    // ...
  
    return (
      <div>
        <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
  
          <History allClicks={allClicks} />
        </div>
      </div>
    )
  }

  export default History;