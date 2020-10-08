import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Header from './components/header';
import Main from './pages/main';
import Bucket from './pages/bucket';
import {history} from './utils';

function App() {
  return (
      <Router history={history}>
          <Header />
          <Container>
              <Switch>
                  <Route path="/" exact><Main /></Route>
                  <Route path="/"><Bucket /></Route>
              </Switch>
          </Container>
      </Router>
  );
}

export default App;
