import { useImperativeHandle, useRef } from "react";

export default function Modal({ result, targetTime, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The Target Time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>x</strong> second left.
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
