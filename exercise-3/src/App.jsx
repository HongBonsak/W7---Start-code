import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [hasError, setHasError] = useState(false);

  /* You will need some function to handle the key pressed and button events */
  function onA(event) {
    setA(event.target.value);
  }

  function onB(event) {
    setB(event.target.value);
  }

  function onCompute() {
    const aNumber = Number(a);
    const bNumber = Number(b);

    if (a.trim() === "" || b.trim() === "" || Number.isNaN(aNumber) || Number.isNaN(bNumber)) {
      setResult("Please enter valid numbers");
      setHasError(true);
      return;
    }

    setResult(String(aNumber + bNumber));
    setHasError(false);
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input className={hasError ? "error" : ""} value={result} disabled />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
