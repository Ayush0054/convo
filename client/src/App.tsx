import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import SignIn from "./pages/signIn";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
