import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/campgrounds/Edit";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import MainPage from "./components/campgrounds/MainPage";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campgrounds" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
