import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import CoomingSoon from './pages/home/FutureItems/ProductSlider/CoomingSoon.js'

import AboutUs from './pages/AboutUs/AboutUs'
import Navbar from "./pages/home/navBar/Navbar";

const Home = React.lazy(() => import("./pages/home/Home"));
const Product = React.lazy(() => import("./pages/products/Product"));


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading.....</div>}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/landingPage" element={<LandingPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={< RegisterPage />} />
          <Route path="/coomingsoon" element={< CoomingSoon />} />
          <Route path="/forget-password" element={< ForgetPasswordPage />} />
          <Route path="/home" element={< HomePage />} />

        </Routes>
      </Suspense>
    </>
  );
}

export default App;

