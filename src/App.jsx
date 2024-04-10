// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './pages/PostList';
import AddPost from './pages/AddPost';
import PostDetails from './pages/PostDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/add" component={AddPost} />
        <Route exact path="/post/:id" component={PostDetails} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
