import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Episodes from "./containers/Episodes";

function App() {
  return (
    <>
      <Router>
        {/*  <NavBar/> */}
        <h1>Nuestra Rick and Morty App</h1>

        <Switch>
          <Route path="/home">{/* <Home /> */}</Route>
          <Route path="/characters">{/* <Characters /> */}</Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
        </Switch>

        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;
