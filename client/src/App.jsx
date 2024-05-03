import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/campgrounds/Edit";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Index from "./components/campgrounds/Index";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import Logout from "./components/users/Logout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
