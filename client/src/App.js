import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRouter from "./AppRouter";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./Components/SigninFolder/Signin";
import Signup from "./Components/SignupFolder/Signup";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <AppRouter />
     </BrowserRouter>
    </div>
  );
}

export default App;
