import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NoQuestion from "./components/NoQuestion";
import Questions from "./components/Question/Questions";

function App() {
  const [startQuiz, setStartQuiz] = useState(true);
  const handleClick = () => {
    setStartQuiz(!startQuiz);
  };
  return (
    <div className="App">
      <Navbar startQuiz={startQuiz} />
      {startQuiz ? <NoQuestion handleClick={handleClick} /> : <Questions />}
    </div>
  );
}

export default App;
