import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './pages/RecipeList'; 
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
