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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./User/Navbar";
import SignupUser from "./User/SignUp";
import Footer from "./User/Footer";
import Sidebar from "./Admin/Sidebar"
import MenuAdm from "./Admin/MenuAdm";


function App() {
  const isForeground = useVisibilityChange();
  const socket = io("http://localhost:3000");
  socket.on("connect", (socket) => {
    console.log(socket);
  });

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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/menu" element={<MenuUser />} />
        <Route path="/cart-payment" element={<CartPaymentUser />} />
        <Route path="/history" element={<HistoryUser />} />
        <Route path="/menu-detail" element={<MenuDetailUser />} />
        <Route path="/sign-up" element={<SignupUser />} />
        <Route path="/sign-in" element={<LoginUser />} />
        <Route path="/menu-admin" element={<MenuAdm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
