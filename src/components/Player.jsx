import { useState } from "react";

export default function Player() {
  const [enteredName, setEnteredName] = useState('');
  const [submittedName, setSubmittedName] = useState(false);

  function handleChange(event) {
    setSubmittedName(false);
    setEnteredName(event.target.value);
  }

  function handleClick() {
    setSubmittedName(true);
  }



  return (
    <section id="player">
      <h2>Welcome {submittedName ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
