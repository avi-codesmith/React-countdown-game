import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [started, setStarted] = useState(false);
  const [expired, setexpired] = useState(false);

  function handleExpired() {
    setStarted(true);
    setTimeout(() => {
      setexpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <p className="red">{expired ? "😭 You Lost!" : ""}</p>
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleExpired}>
          {started ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={started ? "active" : ""}>
        {started ? (
          <span>
            <span className="spinner spin-once">⏳</span>{" "}
            <span>Timer is running...</span>
          </span>
        ) : (
          <span>
            <span className="spinner idle">⌛</span> <span>Timer inactive</span>
          </span>
        )}
      </p>
    </section>
  );
}
