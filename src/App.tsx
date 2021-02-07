import React, { Suspense } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Suspense fallback={(<div>Loading</div>)}>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="*" >
            <Redirect to="/" />;
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
