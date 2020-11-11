import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Logo } from "./logo";

const Container = styled.div`
  height: 80px;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--color-lightgray);
`;

const Box = styled.div`
  display: block;
`;

const LogoBox = styled.div`
  width: 300px;
  padding: 30px 0;
`;

const NavContainer = styled.div`
  display: inline-block;
  padding: 30px 20px;
`;

const NavItem = styled.h1`
  font-size: 12px;
  color: var(--color-blue);
`;

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <LogoBox>
        <Logo />
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
