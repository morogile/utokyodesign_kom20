import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png";
import { Menu, ExternalLinkMenu } from "./menu";

const Container = styled.div`
  height: 80px;
  padding: 25px 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--color-lightgray);
  @media (max-width: 768px) {
    padding: 25px 5.3vw;
  }
`;

const Box = styled.nav`
  display: block;
`;

const LogoBox = styled.div`
  width: 300px;
  @media (max-width: 1024px) {
    width: 240px;
  }
`;

const NavContainer = styled.div`
  display: inline-block;
  margin-left: 30px;
  @media (max-width: 840px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: inline-block;
  @media (min-width: 840px) {
    display: none;
  }
`;

const NavItem = styled.h1`
  font-size: 12px;
  color: var(--color-blue);
`;

const HamburgerContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  cursor: pointer;
`;

const Border = styled.span`
  &:before {
    top: 0;
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: var(--color-gray);
    position: absolute;
  }
  &:after {
    bottom: 0;
    content: "";
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: var(--color-gray);
    position: absolute;
  }
`;

const CenterBorder = styled.span`
  content: "";
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: var(--color-gray);
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

const Blackback = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: black;
  opacity: 0.5;
  display: none;
  transition: all 0.3s ease 0s;
  &.active {
    display: block;
  }
`;

const Drawer = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  @media (min-width: 500px) {
    width: 40vw;
  }
  height: 100vh;
  z-index: 20;
  background-color: white;
  transition: all 0.3s ease 0s;
  transform: translateX(100%);
  &.active {
    transform: none;
  }
  padding: 75px 25px;
  display: flex;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  z-index: 5;
`;

const MenuLine = styled.div`
  border-top: 0.5px solid var(--color-lightgray);
  margin-bottom: 25px;
`;

const DrawerMode = ({ setMenuOpen, active }) => {
  return (
    <>
      <Blackback onClick={() => setMenuOpen(false)} className={active ? "active" : ""} ></Blackback>
      <Drawer className={active ? "active" : ""}>
        <Menu text="トップページ" link="/" />
        <Menu text="授業紹介" link="../lesson/" />
        <Menu text="学生の作品" link="../gallery/" />
        <MenuLine></MenuLine>
        <ExternalLinkMenu text="駒場祭公式" link="https://www.komabasai.net/71/visitor/" />
      </Drawer>
    </>
  );
}

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <HeaderBox>
      <Container>
        <LogoBox>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </LogoBox>
        <Box>
          <NavContainer>
            <Link to="/">
              <NavItem>グラフィックデザイン概論とは</NavItem>
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to="../lesson/">
              <NavItem>授業紹介</NavItem>
            </Link>
          </NavContainer>
          <NavContainer>
            <Link to="../gallery/">
              <NavItem>学生の作品ギャラリー</NavItem>
            </Link>
          </NavContainer>
          <Hamburger>
            <div onClick={() => setMenuOpen(true)}>
              <HamburgerContainer>
                <Border>
                  <CenterBorder />
                </Border>
              </HamburgerContainer>
            </div>
          </Hamburger>
        </Box>
      </Container>
      <DrawerMode setMenuOpen={setMenuOpen} active={menuOpen} />
    </HeaderBox>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
