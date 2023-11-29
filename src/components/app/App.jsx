import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
import { UserPage } from "../../pages/UserPage.js/UserPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:userId" component={UserPage} />
      </Switch>
    </Router>
  );
};

export default App;
