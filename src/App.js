import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenges";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not So Easy" targetTime={5} />
        <TimerChallenge title="Get in" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
