import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { Route, Switch, Link } from "react-router-dom";

// import "pages" component here
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIn from "./pages/SignIn";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </>
  );
}

export default App;
