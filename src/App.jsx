import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './pages/RecipeList';
import AddRecipe from './pages/AddRecipe';
import HomePage from './pages/HomePage';
import AddedRecipes from './pages/AddedRecipes';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [addedRecipes, setAddedRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setAddedRecipes([...addedRecipes, newRecipe]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/recipes" element={<RecipeList recipes={recipes} />} />
        <Route exact path="/add" element={<AddRecipe onAddRecipe={handleAddRecipe} />} />
        <Route exact path="/added-recipes" element={<AddedRecipes addedRecipes={addedRecipes} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
