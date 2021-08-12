import "./App.css";
import LoginForm from "./component/LoginForm";
import RegisterForm from "./component/RegisterForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>JWT Authentication</h2>
      </header>
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
