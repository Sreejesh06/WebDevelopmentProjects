import { useState, useRef, useEffect } from "react";
import "./App.css"; // Import CSS
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const nextprevCount = useRef(0);
  const bodyRef = useRef(document.body); // Ref to the body element
  const [isDark, setIsDark] = useState(false); // State for toggling icon

  const toggleDarkMode = () => {
    if (bodyRef.current.classList.contains("dark-mode")) {
      bodyRef.current.classList.remove("dark-mode");
      setIsDark(false);
    } else {
      bodyRef.current.classList.add("dark-mode");
      setIsDark(true);
    }
  };

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

       
      <i 
        className={`toggle fa-solid ${isDark ? "fa-toggle-on" : "fa-toggle-off"}`} 
        onClick={toggleDarkMode}>
      </i>

    </div>
  );
}
