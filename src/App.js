import NewComp from './components/NewComp/NewComp';
import Home from "./components/Home";

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route  path = '/:id' component = {NewComp} />
        </Switch>
      </div>
    </Router>  
  );
}


export default App;
