import { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const nextprevCount = useRef(0);

  useEffect(() => {
    // Update refs whenever count changes
    nextprevCount.current = prevCount.current;
    prevCount.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCountValue) => prevCountValue + 1); // Use functional update
  };

  const handleDecrement = () => {
    setCount((prevCountValue) => prevCountValue - 1); // Use functional update
  };

  const handleReset = () => {
    setCount(0); // Reset the count to 0
    nextprevCount.current = 0;
    prevCount.current = 0;
  };

  return (
    <div className="main">
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>
      <h3>Next Previous Count: {nextprevCount.current}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
