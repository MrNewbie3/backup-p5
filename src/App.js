import MenuDetail from "./User/MenuDetail";
import React, { useEffect } from "react";
import { setupNotifications } from "./firebase";
import { toastNotification, sendNativeNotification } from "./notificationsHelpers";
import useVisibilityChange from "./useVisibilityChange";
import { io } from "socket.io-client";
import Login from "./User/SignIn";
import Home from "./User/Home"
import Menu from './User/Menu'
import CartPayment from "./User/CartPayment";
import History from "./User/History";
import MenuAdm from "./Admin/MenuAdm";
import Sidebar from "./Admin/Sidebar";
import HistoryAdm from "./Admin/HistoryAdm";
import Payment from "./Admin/Payment";

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

  return <Payment/>;
}

export default App;