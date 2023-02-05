import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Confirmation from "./pages/confirmation";
import Administrator from "./pages/Administrator";
import Requests from "./pages/Requests";
import Historic from "./pages/Historic";
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <>
      <Router>
        <TopBar/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="/administrator" element={<Administrator/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/historic" element={<Historic/>}/>
        </Routes>
      </Router>
    </>
  );
};