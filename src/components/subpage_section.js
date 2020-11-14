import React from "react";
import styled from "styled-components";
import { Sub1, SectionSub } from "../components/wrapper"
import { Head1 } from "../components/heading"
import Desk from "../components/desk"

const PicContainer = styled.div`
  padding: 3vw 7vw;
  @media (max-width: 375px) {
    padding: 0;
  }
`;

export const SubpageSection = ({children, id, title}) => {
  return (
    <>
      <SectionSub id={id}>
        <Head1 title={title} />
        <Sub1>
          {children}
          <PicContainer>
            <Desk />
          </PicContainer>
        </Sub1>
      </SectionSub>
    </>
  );
}