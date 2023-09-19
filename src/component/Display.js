import { useState } from "react";
import { Paragraph } from "./Paragraph";

const Display = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Paragraph counter={counter} name="Suneeta" />
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Display;
