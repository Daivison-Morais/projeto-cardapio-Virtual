import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
};