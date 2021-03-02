import { useState } from "react";
import Button from "../components/Buttons.js";



function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="counter">Counter: {counter}</h1>
      <Button primary={true} onClick={() => setCounter(counter + 1)}>
        +
      </Button>
      <Button primary={true} onClick={() => setCounter(counter - 1)}>
        -
      </Button>
      <Button primary={true} onClick={() => setCounter(0)}>
        RESET
      </Button>
    </div>
  );
}

export default Counter