import styled from "styled-components";

export const QuizResultsStyles = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

export const ResultsPosition = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`;
