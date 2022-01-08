import React from "react";
import styled from "styled-components";
import Data from "../Question/questionData.json";

const Questions = () => {
  return (
    <Question>
      {Data.map((item) => {
        return (
          <QuestionContainer key={item.id}>
            <h4>
              <span>{item.id}.</span> {item.question}
            </h4>
            <CheckBoxContainer>
              <label>
                <input type="checkbox" />
                {item.opt1}
              </label>
              <label>
                <input type="checkbox" />
                {item.opt2}
              </label>
            </CheckBoxContainer>
          </QuestionContainer>
        );
      })}
    </Question>
  );
};

export default Questions;

const Question = styled.div`
  margin: 2rem 0;
  padding: 0 1.75rem;
  font-family: caveat;
  font-size: 24px;
  @media (min-width: 768px) {
    margin: 4rem 0;
    padding: 0 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const QuestionContainer = styled.div`
  margin: 2rem 0;
  max-widhth: 200px;
  h4 {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    width: 400px;
  }
`;
const CheckBoxContainer = styled.div`
  display: flex;
  label {
    margin-bottom: 0.75rem;
    padding: 0 0.5rem;
  }
`;
