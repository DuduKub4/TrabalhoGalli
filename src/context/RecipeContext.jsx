import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const RecipeContext = createContext();

export const useRecipeContext = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
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

  const addRecipe = async (title, body) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
      setRecipes([...recipes, response.data]);
      alert('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe');
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
