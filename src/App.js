import './CSS/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import Index from './Components/Index';
import LogIn from './Components/Login';
import SignUp from './Components/SignUp';
const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            < Index />
          </Route>
          <Route exact path='/men'>
            <Men />
          </Route>
          <Route exact path='/women'>
            <Women />
          </Route>
          <Route exact path='/kids'>
            <Kids />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
