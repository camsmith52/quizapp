import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { DUMMY_DATA } from "./Individual-options";

const QuestionFooter = () => {
  const globalState = useContext(UserContext);
  const [cancelPrev, setCancelPrev] = useState(false);

  //Next button helper func
  const onNextClick = () => {
    globalState.setCount((prev) => prev + 1);
    globalState.setScoreLimit(true);
    globalState.setActive("");
    globalState.setDisabled(false);
    globalState.setMessage("");
  };

  // const onPrevClick = () => {
  //   globalState.setCount((prev) => prev - 1);
  //   globalState.setScoreLimit(true);
  // };

  //Start again button helper func
  const startAgain = () => {
    globalState.setCount(0);
    globalState.setScore(0);
    setCancelPrev(false);
  };

  //Submit button helper func
  const onSubmit = () => {
    setCancelPrev(true);
  };

  const questionTracker =
    globalState.count < DUMMY_DATA.length
      ? `Question ${globalState.count + 1} of 5`
      : "Completed";

  const nextButton = globalState.count < DUMMY_DATA.length && (
    <button disabled={!globalState.disabled} onClick={onNextClick}>
      Next
    </button>
  );

  const submitButton = globalState.count === DUMMY_DATA.length && (
    <button disabled={cancelPrev} onClick={onSubmit} type="submit">
      Submit
    </button>
  );

  const startAgainButton = globalState.count === DUMMY_DATA.length && (
    <button onClick={startAgain}>Start again</button>
  );

  const scoreDisplay = cancelPrev && (
    <p>Your score is {globalState.score} out of 5</p>
  );
  
  return (
    <div>
      {questionTracker}
      {/* {globalState.count > 0 && (
        <button disabled={cancelPrev} onClick={onPrevClick}>
          Prev
        </button>
      )} */}
      {nextButton}
      {submitButton}
      {startAgainButton}
      {scoreDisplay}
    </div>
  );
};

export default QuestionFooter;
