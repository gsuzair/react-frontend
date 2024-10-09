import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path = "/" exact>
          <Users />
        </Route>
        <Route path = "/place/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;