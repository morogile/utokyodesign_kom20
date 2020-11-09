import React from "react";
import styled from "styled-components";

export const TopWrapper = styled.div`

`;

export const Section = styled.section`
  padding: 20px 5.3vw;
  overflow: hidden;
  @media(min-width: 768px){
    padding: 20px 10vw;
  }
`;

export const Top1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Top1box = styled.div`
  margin: auto 0;
  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export const DeskContainer = styled.div`
  width: 350px;
  margin: 20px 0;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    margin: 20px auto;
  }
`;