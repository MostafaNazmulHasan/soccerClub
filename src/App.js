import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Team from "./components/Team/Team"
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import TeamDetails from './components/TeamDetails/TeamDetails'
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/teamDetails/:idTeam">
            <TeamDetails/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
   
    );
}

export default App;
