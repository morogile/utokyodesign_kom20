import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  margin-bottom: 25px;
`;

const Text = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: var(--color-darkgray);
  &::before {
    content: ">";
    color: var(--color-skyblue);
    margin-right: 7px;
  }
`;

const EText = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: var(--color-darkgray);
`;

export const Menu = ({ text, link }) => {
  return (
    <Container>
      <Link to={link}>
        <Text>{text}</Text>
      </Link>
    </Container>
  );
}

export const ExternalLinkMenu = ({text, link}) => {
  return (
    <Container>
      <a href={link}>
        <EText>{text}</EText>
      </a>
    </Container>
  );
}