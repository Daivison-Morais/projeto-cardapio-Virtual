import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import TopoAndFooter from "./components/TopoAndFooter";

export default function App() {
  return (
    <>
      <Router>
        <TopoAndFooter/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </Router>
    </>
  );
};