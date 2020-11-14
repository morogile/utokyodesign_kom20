import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Logo } from "./logo";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";

const Container = styled.div`
  height: 80px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--color-lightgray);
  @media (max-width: 768px) {
    padding: 0 5.3vw;
  }
`;

const Box = styled.div`
  display: block;
`;

const LogoBox = styled.div`
  width: 300px;
  padding: 30px 0;
  @media (max-width: 1024px) {
    width: 240px;
  }
`;

const NavContainer = styled.div`
  display: inline-block;
  padding: 36px 20px;
  @media (max-width: 840px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: inline-block;
  padding: 32px 20px;
  @media (min-width: 840px) {
    display: none;
  }
`;

const NavItem = styled.h1`
  font-size: 12px;
  color: var(--color-blue);
`;

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <LogoBox>
        <img src={logo} alt="logo" />
      </LogoBox>
      <Box>
        <NavContainer>
          <Link to="/">
            <NavItem>グラフィックデザイン概論とは</NavItem>
          </Link>
        </NavContainer>
        <NavContainer>
          <Link to="/lesson">
            <NavItem>授業紹介</NavItem>
          </Link>
        </NavContainer>
        <NavContainer>
          <Link to="/gallery">
            <NavItem>学生の作品ギャラリー</NavItem>
          </Link>
        </NavContainer>
        <Hamburger>
          <img src={hamburger} style={{width: "30px"}} />
        </Hamburger>
      </Box>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
