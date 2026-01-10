import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ timerReset, targetTime, ref, timeRemaining }) {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formatedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  // function handleEsc(event) {
  //   if (event.key === "Escape") {
  //     timerReset();
  //   }
  // }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={timerReset}>
      {userLost ? <h2>😭 You have Lost</h2> : ""}
      {!userLost ? (
        <h2>
          {score > 79 ? "👏 " : "😣"} Your Score: {score}
        </h2>
      ) : (
        ""
      )}
      <p>
        The Target Time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      {formatedRemainingTime <= 0 ? (
        <p>
          You could not stop the timer with in{" "}
          <strong>
            {targetTime} second
            {targetTime > 1 ? "s" : ""}.
          </strong>
        </p>
      ) : (
        <p>
          You stopped the timer with <strong>{formatedRemainingTime}</strong>{" "}
          second{formatedRemainingTime > 1 ? "s" : ""} left.
        </p>
      )}
      <form method="dialog" onSubmit={timerReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
