// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageContainer, Title, LinkList, ListItem, StyledLink } from '../styled-components/HomePageStyles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Title>Bem-vindo ao CookBook</Title>
      <LinkList>
        <ListItem>
          <StyledLink as={Link} to="/recipes">Ver Receitas da API</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink as={Link} to="/add">Adicionar Receita</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink as={Link} to="/added-recipes">Ver Receitas Adicionadas</StyledLink>
        </ListItem>
      </LinkList>
    </HomePageContainer>
  );
};

export default HomePage;
