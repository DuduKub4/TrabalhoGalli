import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #6200ea; /* Deep Purple 500 */
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <h1>Cookbook</h1>
        <NavList>
          <NavItem><NavLink to="/">Home</NavLink></NavItem>
          <NavItem><NavLink to="/add">Adicionar Receita</NavLink></NavItem>
        </NavList>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
