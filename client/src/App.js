/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import AddArt from "./AddArt";
import Artist from "./Artist";
import ArtistList from "./ArtistList";
import Admin from "./Admin";
import ViewArt from "./ViewArt";
import Aartist from "./Aartist";
import { Login } from "./components/UserLogin/Login";
import { Register } from "./components/UserLogin/Register";
import LogReg from "./components/UserLogin/LogR";
import LogrArtist from "./components/ArtistLogin/LogrArtist";
import LogrAdmin from "./components/AdminLogin/LogrAdmin";
import { ForgotPassword } from "./components/UserLogin/ForgotPassword";
import { VerifyOTP } from "./components/UserLogin/VerifyOTP";
import { ResetPassword } from "./components/UserLogin/ResetPassword";
import { ArtistForgotPassword } from "./components/ArtistLogin/ArtistForgotPassword";
import { ArtistVerifyOTP } from "./components/ArtistLogin/ArtistVerifyOTP";
import { ArtistResetPassword } from "./components/ArtistLogin/ArtistResetPassword";
import { AdminForgotPassword } from "./components/AdminLogin/AdminForgotPassword";
import { AdminVerifyOTP } from "./components/AdminLogin/AdminVerifyOTP";
import { AdminResetPassword } from "./components/AdminLogin/AdminResetPassword";
import Tshirt from "./components/Tshirt";
import Hoodie from "./components/Hoodie";
import Shirt from "./components/Shirt";
import Kurti from "./components/Kurti";
import ScrollToTopButton from "./components/scrollToTop";
import Footer from "./components/Footer";
import { Nav } from "react-bootstrap";

const App = () => {
  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132 144 255) 0%,rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0, 0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Tshirt" element={<Tshirt />} />
          <Route path="/Hoodie" element={<Hoodie />} />
          <Route path="/Shirt" element={<Shirt />} />
          <Route path="/Kurti" element={<Kurti />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddArt" element={<AddArt />} />
          <Route path="/UserLogin" element={<LogReg />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/verifyOTP" element={<VerifyOTP />} />

          <Route path="/ArtistList" element={<ArtistList />} />
          <Route path="/viewArt" element={<ViewArt />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/ArtistForgotPassword"
            element={<ArtistForgotPassword />}
          />
          <Route path="/ArtistVerifyOTP" element={<ArtistVerifyOTP />} />
          <Route
            path="/ArtistResetPassword"
            element={<ArtistResetPassword />}
          />
          <Route
            path="/AdminForgotPassword"
            element={<AdminForgotPassword />}
          />
          <Route path="/AdminVerifyOTP" element={<AdminVerifyOTP />} />
          <Route path="/AdminResetPassword" element={<AdminResetPassword />} />
          <Route path="/HOME" element={<ScrollToTopButton />} />

          <Route path="/Aartist" element={<Aartist />} />
          <Route path="/ArtistLogin" element={<LogrArtist />} />
          <Route path="/AdminLogin" element={<LogrAdmin />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
};

export default App;
