// src/styled-components/RecipeListStyles.jsx
import styled from 'styled-components';

export const RecipeContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const RecipeContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const RecipeListContainer = styled.div`
  padding: 20px;
`;

export const RecipeItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const RecipeLink = styled.a`
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;
