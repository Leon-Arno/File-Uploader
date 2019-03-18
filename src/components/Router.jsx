import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

class Router extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default Router;
