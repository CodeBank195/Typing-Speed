import "./App.css";
import Home from "./components/Home";
import GameKhelo from "./components/GameKhelo";
import EndGame from "./components/EndGame";
import { useEffect, useState } from "react";

function App() {
  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (statusGame === "playGame") {
      setScore({
        right: 0,
        wrong: 0,
      });
    }
  }, [statusGame]);

  const handleChangeStatusGame = (status) => {
    setStatusGame(status);
  };

  const handleChangeScore = (type) => {
    if (type === "right") {
      setScore({
        ...score,
        right: score.right + 1,
      });
    } else {
      setScore({
        ...score,
        wrong: score.wrong + 1,
      });
    }
  };

  let layout;
  switch (statusGame) {
    case "playGame":
      layout = <GameKhelo onChnageScore={handleChangeScore} />;
      break;
    case "endGame":
      layout = <EndGame />;
      break;
    default:
      layout = <Home onGame={handleChangeStatusGame} />;
  }

  return <div className="App">{layout}</div>;
}

export default App;
