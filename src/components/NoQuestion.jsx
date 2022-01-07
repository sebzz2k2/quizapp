import React from "react";
import styled from "styled-components";

const NoQuestion = () => {
  return (
    <NoQuest>
      <Container>
        <div>
          <h2>Coding quiz challenge</h2>
          <TextContainer>
            <p>Try to answer the following code related questions </p>
            <p>Keep in mind incorrect answer will penalize your score</p>
          </TextContainer>
          <button>Start Now &gt;</button>
        </div>
      </Container>
    </NoQuest>
  );
};

export default NoQuestion;

const NoQuest = styled.div`
  color: #140e2f;
`;

const Container = styled.div`
  height: calc(100vh - 100px);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  button {
    margin: 8px 0;
    padding: 0.5px 10px;
    font-size: 17px;
    border: #140e2f solid 2px;
    border-radius: 50px;
    background: transparent;
    font-family: caveat;
    color: #140e2f;
  }
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  button {
    margin: 15px 0;
    padding: 2.5px 15px;
    font-size: 25px;
    border: solid 2px #140e2f;
  }
`;

const TextContainer = styled.div`
  padding: 2rem 0;
`;
