import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <h1>Cookbook</h1>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/add">Add Recipe</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
