import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import TopNews from './TopNews';
import AddNews from './AddNews';

const Main = () => (
  <div>
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Added News" component={AddNews} />
      <Route path="/Top News" component={TopNews} />
      <Route render={() => <Redirect to={{ pathname: '/home' }} />} />
    </Switch>
  </div>
);

export default Main;
