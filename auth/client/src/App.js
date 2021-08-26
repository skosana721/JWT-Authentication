import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DashBoard from "./component/DashBoard";
import LoginForm from "./component/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterForm from "./component/RegisterForm";
import { loadUser } from "./redux/actions/auth";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./component/Home";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/Dashboard" component={DashBoard} />
          <Route path="/user/register" component={RegisterForm} />
          <Route path="/user/login" component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
