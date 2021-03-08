import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatched from './components/NotMatched/NotMatched';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/country/:countryCode">
            <CountryDetail/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatched/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
