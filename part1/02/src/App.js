import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}


const App = () => {
  const [counter, setCounter] = useState(0)
  const growCounter = () => setCounter(counter + 1)
  const subtractCounter = () => setCounter(counter - 1)
  const zeroCounter = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />

      <Button
        onClick={growCounter}
        text='plus'
      />

      <Button
        onClick={subtractCounter}
        text='minus'
      />

      <Button
        onClick={zeroCounter}
        text='zero'
      />
    </div>
  )
}

export default App
