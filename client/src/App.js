import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from './components/Content';
import AdminContainer from './containers/AdminContainer';
import ServiceContainer from './containers/ServiceContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/admin" component={AdminContainer} />
          <Route exact path="/service" component={ServiceContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
