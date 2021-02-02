import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import Episodes from "./containers/EpisodesContainer";
import CharactersContainer from "./containers/CharactersContainer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            <CharactersContainer />
          </Route>
          <Route exact path="/episodes">
            <Episodes />
          </Route>
        </Switch>

        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
