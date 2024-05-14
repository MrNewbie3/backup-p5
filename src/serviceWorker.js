export const register = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then((registration) => {})
      .catch((error) => {
        console.log("Error registering service worker:", error);
      });
  }
};
