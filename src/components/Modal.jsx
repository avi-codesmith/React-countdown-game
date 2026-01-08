export default function Modal({ result, targetTime }) {
  return (
    <dialog
      className={
        "result-modal" && targetTime === 1000
          ? "lOne"
          : targetTime === 5000
          ? "lTwo"
          : targetTime === 10000
          ? "lThree"
          : targetTime === 15000
          ? "lfour"
          : "result-modal"
      }
      open
    >
      <h2>You {result}</h2>
      <p>
        The Target Time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>x</strong>
        second left.
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
