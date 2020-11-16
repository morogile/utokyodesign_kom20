import React from "react";
import styled from "styled-components";
import { Sub1, SectionSub } from "../components/wrapper"
import { Head1 } from "../components/heading"
import Image from "../components/subpage_img";

const PicContainer = styled.div`
  padding: 3vw 7vw;
  @media (max-width: 450px) {
    padding: 10px 0;
  }
`;

export const SubpageSection = ({children, id, title, filename}) => {
  return (
    <>
      <SectionSub id={id}>
        <Head1 title={title} />
        <Sub1>
          {children}
          <PicContainer>
            <Image filename={filename} alt={id} />
          </PicContainer>
        </Sub1>
      </SectionSub>
    </>
  );
}

SubpageSection.defaultProps = {
  filename: "desk.jpg"
};