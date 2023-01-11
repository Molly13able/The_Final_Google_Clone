import "./index.css";
import "./App.css";

import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="./" element={<Home />}></Route>
          <Route path="./search" element={<SearchPage />}></Route>
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
