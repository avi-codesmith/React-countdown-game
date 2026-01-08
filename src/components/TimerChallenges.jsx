import { useRef, useState } from "react";
import Modal from "../components/Modal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [started, setStarted] = useState(false);
  const [expired, setexpired] = useState(false);

  function handleStart() {
    timer.current = setStarted(true);
    setTimeout(() => {
      setexpired(true);
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {expired && <Modal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={started ? handleStop : handleStart}>
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
              <span className="spinner idle">⌛</span>{" "}
              <span>Timer inactive</span>
            </span>
          )}
        </p>
      </section>
    </>
  );
}
