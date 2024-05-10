import React, { useEffect } from "react";
import { setupNotifications } from "./firebase";
import { toastNotification, sendNativeNotification } from "./notificationsHelpers";
import useVisibilityChange from "./useVisibilityChange";
import { register } from "./serviceWorker";

function App() {
  const isForeground = useVisibilityChange();
  useEffect(() => {
    setupNotifications((message) => {
      if (isForeground) {
        // App is in the foreground, show toast notification
        toastNotification({
          title:"title",
          description: "body",
          status: "info",
        });
      } else {
        // App is in the background, show native notification
        sendNativeNotification({
          title:"title",
          body:"body",
        });
      }
    });
  }, []);
  return (
    <div className="App">
      {/* Your app content */}
    </div>
  );
}

export default App;
