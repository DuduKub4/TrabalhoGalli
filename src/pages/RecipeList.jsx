// src/pages/RecipeList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RecipeContainer, RecipeTitle, RecipeContent, RecipeListContainer, RecipeItem, RecipeLink } from '../styled-components/RecipeListStyles';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContainer>
      <h2>Recipes from API</h2>
      <RecipeListContainer>
        <ul>
          {recipes.map(recipe => (
            <RecipeItem key={recipe.id}>
              <RecipeLink href={`/post/${recipe.id}`}>
                <RecipeTitle>{recipe.title}</RecipeTitle>
                <RecipeContent>{recipe.body}</RecipeContent>
              </RecipeLink>
            </RecipeItem>
          ))}
        </ul>
      </RecipeListContainer>
    </RecipeContainer>
  );
};

export default RecipeList;
