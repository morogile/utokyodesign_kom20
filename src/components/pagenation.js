import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 60px 0 ;
`;

const PagenationContainer = styled.div`
  opacity: 0.8;
  &:hover,:active {
    opacity: 1;
  }
`;

const Label = styled.p`
  font-size: 12px;
  color: var(--color-gray);
  margin-bottom: 1.2vw;
  @media (max-width: 375px) {
    font-size: 9px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const BeforeText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-black);
  &::before {
    content: "<<";
    display: inline-block;
    font-size: 12px;
    transform: translateY(-4px);
    margin-right: 15px;
    font-weight: normal;
    @media (max-width: 600px) {
      transform: none;
    }
  }
  @media (max-width: 960px) {
    font-size: 2.6vw;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 2.6vw;
  }
`;

const AfterText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--color-black);
  &::after {
    content: ">>";
    display: inline-block;
    font-size: 12px;
    transform: translateY(-4px);
    margin-left: 15px;
    font-weight: normal;
    @media (max-width: 600px) {
      transform: none;
    }
  }
  @media (max-width: 960px) {
    font-size: 2.6vw;
  }
  @media (max-width: 375px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 2.6vw;
  }
`;

const BeforePagenation = ({ text }) => {
  return (
    <PagenationContainer>
      <Label>BEFORE</Label>
      <BeforeText>{text}</BeforeText>
    </PagenationContainer>
  );
}

const NextPagenation = ({ text }) => {
  return (
    <PagenationContainer>
      <Label>NEXT</Label>
      <AfterText>{text}</AfterText>
    </PagenationContainer>
  );
}

export const Pagenations = ({nexttext, nextlink}) => {
  return(
    <>
      <Container>
        <Link to="/">
          <BeforePagenation text={"トップページに戻る"} />
        </Link>
        <Link to={nextlink}>
          <NextPagenation text={nexttext} />
        </Link>
      </Container>
    </>
  );
}