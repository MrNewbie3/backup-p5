import MenuDetailUser from "./User/MenuDetail";
import React, { useEffect } from "react";
import { setupNotifications } from "./firebase";
import { toastNotification, sendNativeNotification } from "./notificationsHelpers";
import useVisibilityChange from "./useVisibilityChange";
import { io } from "socket.io-client";
import LoginUser from "./User/SignIn";
import HomeUser from "./User/Home";
import MenuUser from "./User/Menu";
import CartPaymentUser from "./User/CartPayment";
import HistoryUser from "./User/History";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./User/Navbar";
import SignupUser from "./User/SignUp";
import Footer from "./User/Footer";
import Sidebar from "./Admin/Sidebar";
import MenuAdm from "./Admin/MenuAdm";
import HistoryAdm from "./Admin/HistoryAdm";
import Payment from "./Admin/Payment";
import { useAuth } from "./hooks/useAuth";

function App() {
  const isForeground = useVisibilityChange();
  const socket = io("http://localhost:3000");
  socket.on("connect", (socket) => {});
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const showNavbar = !(location.pathname.includes("login") || location.pathname.includes("signup"));

  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title: "title",
          description: "body",
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title: "title",
          body: "body",
        });
      }
    });
  }, []);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        {/* <Route path="/signup" element={<SignupUser />} /> */}
        <Route path="/signup" element={!isAuthenticated ? <SignupUser /> : <Navigate to="/" replace />} />
        {/* <Route path="/login" element={<LoginUser />} /> */}
        <Route path="/login" element={!isAuthenticated ? <LoginUser /> : <Navigate to="/" replace />} />
        <Route path="/" element={isAuthenticated ? <HomeUser /> : <Navigate to="/login" replace />} />
        <Route path="/menu" element={isAuthenticated ? <MenuUser /> : <Navigate to="/login" replace />} />
        <Route path="/menu-detail/:id" element={isAuthenticated ? <MenuDetailUser /> : <Navigate to="/login" replace />} />
        <Route path="/cart-payment" element={isAuthenticated ? <CartPaymentUser /> : <Navigate to="/login" replace />} />
        <Route path="/history" element={isAuthenticated ? <HistoryUser /> : <Navigate to="/login" replace />} />
        <Route path="/menu-admin" element={isAuthenticated ? <MenuAdm /> : <Navigate to="/login" replace />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
}

export default App;
