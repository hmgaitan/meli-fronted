import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Scss
import './App.scss';

// Custom components
import Home from './components/home/Home';
import ItemDetail from './components/item-detail/ItemDetail';
import SearchResult from './components/search-result/SearchResult';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/items" render={(props) => <SearchResult {...props} />} />
          <Route exact path="/items/:id" render={(props) => <ItemDetail {...props} />} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
