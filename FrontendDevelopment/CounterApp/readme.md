


## **Building a Counter App in React with Dynamic State Management**

### **Introduction**

In this blog, we'll walk through creating a **simple counter app** using React, where users can increment, decrement, and reset a counter value. The application will demonstrate how to manage component state with hooks like `useState` and `useRef`. We'll also take a look at how to maintain previous values using React's `useRef` hook for a dynamic and interactive user experience.

### **Project Overview**

The goal of this project is to:
1. Create a basic **React counter** that allows the user to:
   - Increment the count.
   - Decrement the count.
   - Reset the count to zero.
2. Track **previous values** and display them in real-time.
3. Style the application to have a clean and simple user interface.

### **Technology Used**
- **React.js**: A JavaScript library for building user interfaces.
- **useState**: A React hook for managing state in a functional component.
- **useRef**: A React hook for persisting values between renders without causing re-renders.
- **CSS**: For styling the application.

---

### **Setting Up the React App**

Let's start by setting up our React app. If you don’t have React installed yet, you can quickly create a new React app using **Create React App**:

```bash
npx create-react-app counter-app
cd counter-app
npm start
```

This command creates a new React project and starts a development server. Now you're ready to begin building your counter app!

---

### **Building the Counter Component**

Now, let's create our main component. We'll use the following hooks:

- **`useState`**: To manage the counter value.
- **`useRef`**: To store and persist previous values (since refs do not trigger re-renders).

#### **App Component (App.js)**

```javascript
import { useState, useRef, useEffect } from "react";
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const nextprevCount = useRef(0);

  useEffect(() => {
    // Update refs for non-zero counts
    nextprevCount.current = prevCount.current;
    prevCount.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1); // Increment the count
  };

  const handleDecrement = () => {
    setCount(count - 1); // Decrement the count
  };

  const handleReset = () => {
    setCount(0); // Reset the count to 0
  };

  return (
    <div className="counter-container">
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>
      <h3>Next Previous Count: {nextprevCount.current}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

### **Explanation of the Code**

- **useState** is used to manage the `count` value. This is the main value that the user interacts with.
- **useRef** is used to store `prevCount` and `nextprevCount` to track the previous and next previous values. The key advantage of `useRef` over `useState` here is that it doesn’t cause re-renders when updated.
- **useEffect** updates the `prevCount` and `nextprevCount` every time the `count` changes.

---

### **Styling the Counter App**

Now that we have the basic functionality, let’s add some simple CSS to style our app.

#### **App CSS (App.css)**

```css
/* App Container */
.counter-container {
  background-color: #ffffff;
  color: #333;
  border-radius: 15px;
  padding: 40px 30px;
  width: 320px;
  margin: 100px auto;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #e0e0e0;
}

/* Heading Styles */
h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 12px;
}

/* Button Styling */
button {
  padding: 12px 20px;
  margin: 12px 8px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  width: 120px;
  letter-spacing: 0.5px;
}

/* Increment/Decrement buttons */
button:nth-of-type(1), button:nth-of-type(2) {
  background-color: #27ae60;
  color: white;
}

button:nth-of-type(1):hover, button:nth-of-type(2):hover {
  background-color: #2ecc71;
}

button:nth-of-type(1):active, button:nth-of-type(2):active {
  background-color: #2ecc71;
  transform: translateY(2px);
}

/* Reset button */
button:nth-of-type(3) {
  background-color: #e74c3c;
  color: white;
}

button:nth-of-type(3):hover {
  background-color: #e67e22;
}

button:nth-of-type(3):active {
  background-color: #e67e22;
  transform: translateY(2px);
}

/* Button container spacing */
button + button {
  margin-left: 10px;
}

/* Media Queries for responsiveness */
@media (max-width: 480px) {
  .counter-container {
    width: 90%;
    padding: 30px 20px;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1rem;
  }
}
```

### **Features of the App**

1. **Increment/Decrement**: Clicking the respective buttons will change the count. The counter will update with the correct values and display the previous and next previous counts.
2. **Reset**: The reset button resets the count to 0 and also clears the previous values.
3. **Responsive Design**: The app is fully responsive, so it works well on mobile devices.

---

### **Conclusion**

In this project, we've built a simple counter app in React. By using the **`useState`** and **`useRef`** hooks, we've created a dynamic app that tracks the current count as well as the previous and next previous values. We've also styled the app using basic CSS to make it visually appealing and user-friendly.

This project serves as a good example of how to manage state in React and how to use refs for tracking data across renders without triggering unnecessary re-renders.

### **Next Steps**

- **Enhance the UI**: Add more styles to the app, maybe include icons or animations.
- **Persist State**: Store the count in the local storage so the value remains intact even after refreshing the page.
- **Add More Features**: Include features like setting a custom starting count, adding a counter history, or making the app interactive with more buttons and actions.

---

Hope you enjoyed building this simple counter app in React! Feel free to fork the repo and make your own improvements. 😊

---

