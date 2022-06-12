import React, { useState, createContext } from "react";

import QuestionFooter from "./components/Question-footer";
import QuestionHeader from "./components/Question-header";
import QuestionOptions from "./components/Question-options";

export const UserContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [scoreLimit, setScoreLimit] = useState(null);
  const [score, setScore] = useState(0);
  const [active, setActive] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const globalState = {
    count: count,
    scoreLimit: scoreLimit,
    score: score,
    active: active,
    disabled: disabled,
    message: message,
    setMessage: setMessage,
    setScore: setScore,
    setScoreLimit: setScoreLimit,
    setActive: setActive,
    setDisabled: setDisabled,
    setCount: setCount,
  };

  return (
    <div>
      <UserContext.Provider value={globalState}>
        <QuestionHeader />
        <QuestionOptions />
        <QuestionFooter />
      </UserContext.Provider>
    </div>
  );
}

export default App;
