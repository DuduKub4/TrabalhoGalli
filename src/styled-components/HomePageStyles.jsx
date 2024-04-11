// src/styled-components/HomePageStyles.jsx

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens na horizontal */
  justify-content: center; /* Centraliza os itens na vertical */
  height: 100vh; /* Define a altura para ocupar a altura total da tela */
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #6200ea;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a0072; /* Altere a cor do hover conforme necessário */
  }
`;
