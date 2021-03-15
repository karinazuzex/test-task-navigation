import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import { ROUTES } from './constants/routes';
import Dashboard from './containers/Dashboard/Dashboard';
import Home from './containers/Home/Home';
import Settings from './containers/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.SETTINGS} component={Settings} />
      </Switch>
    </div>
  );
}

export default App;
