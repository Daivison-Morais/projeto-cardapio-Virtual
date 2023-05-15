import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Confirmation from "./pages/confirmation";
import Administrator from "./pages/Administrator";
import Requests from "./pages/Requests";
import Historic from "./pages/Historic";
import TopBar from "./components/TopBar";
import Waiting from "./pages/waiting";
import { useState } from "react";
import UserContext from "./components/UserContext";
import NotfoundPage from "./pages/NotFoundPage";

export default function App() {

  const [token, setToken] = useState("");
  const [restaurantId, setRestaurantId] = useState(0);

  return (
    <>
      <Router>
      <UserContext.Provider
          value={{
            token,
            setToken,
            restaurantId,
            setRestaurantId
          }}
        >
        <TopBar/>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/confirmation" element={<Confirmation/>}/>
          <Route path="/administrator" element={<Administrator/>}/>
          <Route path="/requests" element={<Requests/>}/>
          <Route path="/historic" element={<Historic/>}/>
          <Route path="/wainting" element={<Waiting/>}/>
          <Route path="*" element={<NotfoundPage/>}/>
        </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
};