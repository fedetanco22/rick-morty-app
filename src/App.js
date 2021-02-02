import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NavBar from "./components/NavBar";
import Episodes from "./containers/EpisodesContainer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <h1>Nuestra Rick and Morty App</h1>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/characters">
            {/* <Characters /> */}
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
