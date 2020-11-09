import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  text-align: center;
`;

const H2Container = styled.div`
  padding: 20px 0;
  text-align: left;
  display: flex;
`;

const Heading = styled.h1`
  font-size: 15px;
  font-family: inherit;
  font-weight: normal;
  color: var(--color-darkgray);
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -20px;
    display: inline-block;
    width: 40%;
    height: 1px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: var(--color-skyblue);
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Heading2 = styled.h2`
  font-size: 16px;
  font-family: inherit;
  font-weight: normal;
  margin-bottom: 0;
  color: var(--color-black);
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Head1 = ({title}) => {
  return (
    <Container>
      <Heading>
        {title}
      </Heading>
    </Container>
  );
};

export const Head2 = ({titlepre, title}) => {
  return (
    <H2Container>
      <Heading2 >
        <span style={{marginRight: "10px"}}>
          {titlepre}
        </span>
        {title}
      </Heading2>
    </H2Container>
  );
}