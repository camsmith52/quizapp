import React, { useContext } from "react";
import { UserContext } from "../App";
import "./Individual-options.css";

export const DUMMY_DATA = [
  {
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2,
  },
  {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4,
  },
  {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0,
  },
  {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3,
  },
  {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4,
  },
];

const IndividualOptions = () => {
  //Global state import
  const globalState = useContext(UserContext);

  //Question pulled from DUMMYDATA
  const question =
    DUMMY_DATA[globalState.count] === undefined ? <div>End of Quiz</div> : "";

    //Function logic used to check answer. Global state setters used upon incorrect/correct answer
  const checkAnswer = (e, option, index) => {
    const buttonIndex = index;
    const correctAnswer = DUMMY_DATA[globalState.count].correctAnswer;
    globalState.scoreLimit = correctAnswer === index ? true : false;

    if (globalState.scoreLimit && buttonIndex === correctAnswer) {
      globalState.setMessage(`Correct`);
      globalState.setScore((prev) => prev + 1);
      globalState.setScoreLimit(false);
      globalState.setDisabled(true);
      globalState.active = true;
    } else if (!globalState.scoreLimit && buttonIndex !== correctAnswer) {
      globalState.scoreLimit = true;
      globalState.setDisabled(true);
      globalState.setActive(false);
      globalState.setMessage(
        `Sorry, the correct answer is ${
          DUMMY_DATA[globalState.count].choices[
            DUMMY_DATA[globalState.count].correctAnswer
          ]
        }`
      );
    }
  };

  //Maps over the DUMMYDATA at each question to spit out the answer buttons
  const answerOptions =
    DUMMY_DATA[globalState.count] !== undefined ? (
      DUMMY_DATA[globalState.count].choices.map((option, index) => (
        <button
          onClick={(e) => checkAnswer(e, option, index)}
          key={index}
          id={index}
          className={globalState.active ? "active" : "inactive"}
          disabled={globalState.disabled}
        >
          {option}
        </button>
      ))
    ) : (
      <div>Click submit to finish</div>
    );

  return (
    <div>
      {question}
      {answerOptions}
      {globalState.message}
    </div>
  );
};

export default IndividualOptions;
