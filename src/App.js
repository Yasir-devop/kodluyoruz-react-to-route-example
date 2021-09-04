import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Users from './components/Users';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <div>
        <h1>Linkler</h1>
        <nav>
          <ul>
            <li>
              <NavLink exact activeStyle={{ padding:2,fontSize:30,backgroundColor:"purple",color:"#fff",marginTop:10,marginBottom:10}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ padding:2,fontSize:30,backgroundColor:"purple",color:"#fff",marginTop:10,marginBottom:10 }} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ padding:2,fontSize:30,backgroundColor:"purple",color:"#fff",marginTop:10,marginBottom:10 }} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

<hr></hr>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
