import { useRef, useState } from "react";
import Modal from "../components/Modal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => {
        return prev - 10;
      });
    }, 10);
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <Modal
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        timerReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? (
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
