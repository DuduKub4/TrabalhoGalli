import React from 'react';
import { RecipeContainer, RecipeTitle, RecipeContent, RecipeListContainer, RecipeItem, RecipeLink } from '../styled-components/AddedRecipesStyles';

const AddedRecipes = ({ addedRecipes }) => {
  return (
    <RecipeContainer>
      <h2>Receitas Adicionadas</h2>
      <RecipeListContainer>
        {addedRecipes.map(recipe => (
          <RecipeItem key={recipe.id}>
            <RecipeTitle>{recipe.title}</RecipeTitle>
            <RecipeContent>{recipe.description}</RecipeContent>
          </RecipeItem>
        ))}
      </RecipeListContainer>
    </RecipeContainer>
  );
};

export default AddedRecipes;
