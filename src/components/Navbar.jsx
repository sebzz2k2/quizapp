import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <h1>Quizzer</h1>
      <button>Start Now</button>
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
  button {
    margin: 8px 0;
    padding: 0.5px 10px;
    font-size: 17px;
    border: solid 2px white;
    border-radius: 50px;
    background: transparent;
    font-family: caveat;
    color: white;
  }

  @media (min-width: 768px) {
    height: 70px;
    padding: 0 3rem;
    h1 {
      font-size: 50px;
    }
    button {
      margin: 15px 0;
      padding: 2.5px 15px;
      font-size: 25px;
      border: solid 2px white;
    }
  }
`;
