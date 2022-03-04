import { useState } from 'react'

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({onC, txt}) => {
  return(
    <button onClick={onC}>{txt}</button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [value, setValue] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }


  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        
        <History allClicks={allClicks} />
        <div>
          {value}
          <Button onC={setToValue(0)} txt='0' />
          <Button onC={setToValue(value + 1)} txt='+1' />
          <Button onC={setToValue(1000)} txt='1k' />
        </div>
      </div>
    </div>
  )
}

export default App
