import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
               children={HomePage}/>

        <Route path="sigh_up"
               component={SignUpPage}/>

        <Route path={['/sigh_in', '/login']}>

          <SignInPage/>

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
