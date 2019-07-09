import React from 'react';
import { createBrowserHistory } from 'history';

import { Router, Route, Switch } from 'react-router-dom';
import { Home, Item } from 'pages';

import HeaderContainer from 'components/header/HeaderContainer';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={history}>
      <HeaderContainer />
      <Switch>
        <Route path='/item' component={Item} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;