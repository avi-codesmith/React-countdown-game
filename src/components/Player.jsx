import { useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState(null);
  const [btnClick, setBtnClick] = useState(false);

  function handleUserName(event) {
    setBtnClick(false);
    setUserName(event.target.value);
  }

  function handleClick() {
    setBtnClick(true);
  }

  return (
    <section id="player">
      <h2>Welcome {btnClick ? userName : "there!"}</h2>
      <p>
        <input
          type="text"
          value={btnClick ? "" : userName}
          onChange={(event) => handleUserName(event)}
        />
        <button disabled={!userName} onClick={handleClick}>
          Set Name
        </button>
      </p>
    </section>
  );
}
