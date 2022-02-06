// Dependencies
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

// Components
import Text from "../../components/Text";
// Styles
import {
  ButtonPosition,
  ButtonSection,
  QuestionSection,
  QuizStyles,
} from "./styles";
import { IQuestions, IScore } from "./types";

const Quiz = () => {
  let navigate = useNavigate();
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<IScore[]>([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  const htmlDecode = (input: string) => {
    const element = document.createElement("textarea");
    element.innerHTML = input;
    return element.childNodes.length === 0
      ? ""
      : element.childNodes[0].nodeValue;
  };
  const vote = (answer: string) => {
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      answer === questions[currentQuestion].correct_answer
        ? setScore([
            ...score,
            {
              question: htmlDecode(questions[currentQuestion].question),
              answer: "correct",
            },
          ])
        : setScore([
            ...score,
            {
              question: htmlDecode(questions[currentQuestion].question),
              answer: "incorrect",
            },
          ]);
    } else {
      navigate("/results", { state: score });
    }
  };

  return (
    <QuizStyles>
      <Text size="3.2" color="black" headline>
        {questions.length > 0 && questions[currentQuestion].category}
      </Text>
      <QuestionSection>
        <Text size="2.4" color="black">
          {questions.length > 0 &&
            htmlDecode(questions[currentQuestion].question)}
        </Text>
      </QuestionSection>
      <ButtonSection>
        <ButtonPosition>
          <Button
            onClick={() => vote("True")}
            type="circle"
            status="red"
            size="small"
            color="white"
          >
            False
          </Button>
        </ButtonPosition>
        <ButtonPosition>
          <Button
            onClick={() => vote("False")}
            type="circle"
            status="primary"
            size="small"
            color="white"
          >
            True
          </Button>
        </ButtonPosition>
      </ButtonSection>
      <Text size="2.4" color="black">
        {`${currentQuestion + 1} of ${questions.length}`}
      </Text>
    </QuizStyles>
  );
};

export default Quiz;
