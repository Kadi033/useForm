import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Createaccount, Home, Loginform } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/create-account" element={<Createaccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
