import React, { useContext } from "react";
import { UserContext } from "../App";
import { DUMMY_DATA } from "./Individual-options";

const QuestionHeader = () => {
  const globalState = useContext(UserContext);

  const questionHeader =
    globalState.count <= DUMMY_DATA.length - 1
      ? ` Question: ${DUMMY_DATA[globalState.count].question}`
      : "";

  return <div>{questionHeader}</div>;
};

export default QuestionHeader;
