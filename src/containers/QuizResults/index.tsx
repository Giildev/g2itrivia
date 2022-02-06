// Dependencies
import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import Text from "../../components/Text";
import { IScore } from "../Quiz/types";

// Styles
import { QuizResultsStyles, ResultsPosition } from "./styles";
import Button from "../../components/Button";

const QuizResults: React.FC = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const state = location.state as IScore[];
  const [scoreResult, setScoreResult] = useState<number>(0);

  useEffect(() => {
    const res = state.filter((data: IScore) => data.answer === "correct");
    setScoreResult(res.length);
  }, [state, scoreResult]);

  return (
    <QuizResultsStyles>
      <Text size="2.4" color="black">
        {`You Scored ${scoreResult} of ${state.length + 1}`}
      </Text>
      <ResultsPosition>
        {state.map((result: IScore) => {
          return result.answer === "correct" ? (
            <Fragment key={result.question}>
              <Text size="2.4" color="black">
                &#9989; {result.question}
              </Text>
            </Fragment>
          ) : (
            <Fragment key={result.question}>
              <Text size="1.8" color="black">
                &#10060; {result.question}
              </Text>
            </Fragment>
          );
        })}
      </ResultsPosition>
      <Button
        onClick={() => navigate("/", { replace: true })}
        type="square"
        status="primary"
        size="large"
        color="white"
      >
        Play Again?
      </Button>
    </QuizResultsStyles>
  );
};

export default QuizResults;
