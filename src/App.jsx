import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeList from './pages/RecipeList'; 
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={RecipeList} />
        <Route exact path="/add" component={AddRecipe} />
        <Route exact path="/recipe/:id" component={RecipeDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
