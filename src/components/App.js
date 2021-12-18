import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../helpers/Home";
import Destination from "../helpers/Destination";
import Crew from "../helpers/Crew";
import Technology from "../helpers/Technology";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Router>
        <Switch>
          <Route path='/' component={<Home />} />
          <Route path='/destination' component={<Destination />} />
          <Route path='/crew' component={<Crew />} />
          <Route path='/technology' component={<Technology />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
