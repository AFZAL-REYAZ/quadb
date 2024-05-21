import "./App.css";
import ListingToDo from "./components/ListingToDo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/listingtodo" element={<ListingToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
