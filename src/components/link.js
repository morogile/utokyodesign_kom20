import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  width: 285px;
  height: 43px;
  margin: 0 auto;
  padding: 10px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-black);
  &:hover, &:active {
    /* transform: scale(1.01); */
    transition: all 0.1s ease-out;
    background-color: black;
  }
`

const Small = styled(Container)`
  width: 175px;
  height: 31px;
  padding: 6px 8px;
  display: block;
  margin: 20px 0 0 0;
`;

const Big = styled(Container)`
  width: 285px;
  height: 37px;
  padding: 8px 0;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Para = styled.p`
  font-size: 12px;
  color: white;
  margin-bottom: 0px;
`;

const Para2 = styled(Para)`
  text-align: center;
`;

export const LinkButton = ({link, text}) => {
  return (
    <Link to={link}>
      <Container>
        <Para>{text}</Para>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7435 6.2515L14 6L13.7435 5.7485L7.98953 0.107784C7.84293 -0.0359281 7.62304 -0.0359281 7.47644 0.107784C7.32984 0.251497 7.32984 0.467066 7.47644 0.610778L12.6073 5.64072H0.366492C0.146597 5.64072 0 5.78443 0 6C0 6.21557 0.146597 6.35928 0.366492 6.35928H12.6073L7.47644 11.3892C7.32984 11.5329 7.32984 11.7485 7.47644 11.8922C7.54974 11.9641 7.65969 12 7.73298 12C7.80628 12 7.91623 11.9641 7.98953 11.8922L13.7435 6.2515Z" fill="#00A7FF"/>
        </svg>
      </Container>
    </Link>
  );
};

export const ExternalLink = ({link, text}) => {
  return (
    <a href={link}>
      <Small>
        <Para2>{text}</Para2>
      </Small>
    </a>
  );
}

export const BigExternalLink = ({link, text}) => {
  return (
    <a href={link} style={{display: "flex", justifyContent: "space-between"}}>
      <Big>
        <Para2>{text}</Para2>
      </Big>
    </a>
  );
}