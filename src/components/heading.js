import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
`;

const Heading = styled.h1`
  font-size: 15px;
  font-family: inherit;
  color: #464646;
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
    background-color: #008CD6;
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