import React from "react";
import styled from "styled-components";
import LogoW from "./logo_w";
import { Link } from "gatsby";
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"

const Wrapper = styled.div`
  padding: 0 140px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: var(--color-black);
`;

const LeftContainer = styled.div`
  padding: 70px 0;
  width: 274px;
`;

const RightContainer = styled.div`
  padding: 55px 0;
  display: flex;
  justify-content: flex-end;
`;

const Para = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 7px;
  line-height: 180%;
  color: var(--color-gray);
  margin-top: 16px;
`;

const Box = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: space-between;
`;

const BoxWithBorder = styled(Box)`
  border-left: solid 0.5px var(--color-skyblue);
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 30px;
  opacity: 0.6;
`;

const UList = styled.ul`
  margin: 0 1.45rem;
`;

const List = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  margin-bottom: 10px;
  color: var(--color-lightgray);
`;

const LastList = styled(List)`
  margin-bottom: 0;
`;


export const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <LeftContainer>
          <LogoW />
          <Para>Copyright 2020グラフィックデザイン概論　All Rights Reserved.️ </Para>
        </LeftContainer>
        <RightContainer>
          <BoxWithBorder>
            <UList>
              <Link to="/"><List>トップページ</List></Link>
              <Link to="/lesson"><List>授業紹介</List></Link>
              <Link to="/gallery"><List>ギャラリー</List></Link>
              <Link to="/#ワークショップ"><LastList>ワークショップ</LastList></Link>
            </UList>
          </BoxWithBorder>
          <Box>
            <Icon>
              <a href="https://twitter.com/utokyo_design">
                <img src={twitter} />
              </a>
            </Icon>
            <Icon>
              <a href="https://www.facebook.com/%E3%82%B0%E3%83%A9%E3%83%95%E3%82%A3%E3%83%83%E3%82%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E6%A6%82%E8%AB%96-1599864340084274">
                <img src={facebook} />  
              </a>
            </Icon>
          </Box>
        </RightContainer>
      </Wrapper>
    </footer>
  );
}