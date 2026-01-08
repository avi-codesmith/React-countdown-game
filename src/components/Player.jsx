import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [userName, setUserName] = useState(null);

  function handleClick() {
    setUserName(playerName.current.value);
    playerName.current.value = "";
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <section id="player">
      <h2>
        Welcome <span className="limit">{userName ? userName : "there!"}</span>
      </h2>
      <p>
        <input ref={playerName} type="text" onKeyDown={handleKeyDown} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
