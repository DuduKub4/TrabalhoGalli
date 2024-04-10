import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h2>Receitas</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
            <p>{recipe.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
