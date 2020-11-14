import styled from "styled-components";

export const TopWrapper = styled.div`

`;

export const Section = styled.section`
  padding: 40px 5.3vw;
  overflow: hidden;
  @media(min-width: 768px){
    padding: 40px 10vw;
  }
`;

export const SectionSub = styled.section`
  padding: 0 24vw;
  @media (max-width: 768px) {
    padding: 0 12vw;
  }
  @media (max-width: 375px) {
    padding: 0 6vw;
  }
`;

export const Top1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Top2 = styled.div`
  flex-wrap: wrap-reverse;
`;

export const Top3 = styled.div`
  padding: 0 100px;
  @media (max-width: 1200px) {
    padding: 0;
  }
`;

export const Top4 = styled.div`
  padding: 50px 0px;
  @media (max-width: 768px){
    width: 100%;
    padding: 10vw 0;
  }
`;

export const Top5 = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 32px;
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

export const Lead = styled.p`
  color: var(--color-gray);
  width: 100%;
  margin: 52px 0;
  @media (max-width: 500px) {
    margin: 20px 0;
  }
`;

export const Sub1 = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 60px;
`;