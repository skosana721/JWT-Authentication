import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DashBoard from "./component/DashBoard";
import LoginForm from "./component/LoginForm";

import RegisterForm from "./component/RegisterForm";
import { loadUser } from "./redux/actions/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>JWT Authentication</h2>
      </header>

      <DashBoard />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
