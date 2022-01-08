import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  return (
    <Nav>
      <h1>Quizzer</h1>
      {props.startQuiz ? <p>🏆 : </p> : <p>⭐ : </p>}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: #140e2f;
  padding: 0 1rem;
  h1 {
    color: white;
    font-family: caveat;
    font-weight: 700;
    font-size: 35px;
  }
  p {
    margin: 8px 0;
    padding: 0.5px 10px;
    font-size: 17px;
    background: transparent;
    color: white;
  }

  @media (min-width: 768px) {
    height: 70px;
    padding: 0 3rem;
    h1 {
      font-size: 50px;
    }
    p {
      margin: 15px 0;
      padding: 2.5px 15px;
      font-size: 25px;
    }
  }
`;
