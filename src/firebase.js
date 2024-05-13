// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqzeqMesbDfI4x_qED9I-kIxR6GUSyl0Y",
  authDomain: "siabsen-eccab.firebaseapp.com",
  databaseURL: "https://siabsen-eccab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "siabsen-eccab",
  storageBucket: "siabsen-eccab.appspot.com",
  messagingSenderId: "784190000743",
  appId: "1:784190000743:web:74c136911ebe4d46314ec2",
  measurementId: "G-LS0GXX65NN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const messaging = getMessaging(app);
const firestore = getFirestore(app);
const setupNotifications = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      try {
        const token = await getToken(messaging);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Notification permission denied.");
    }
    onMessage(messaging, (payload) => {});
  } catch (error) {
    console.error("Error setting up notifications:", error);
  }
};

const subscribe = (token, UID) => {
  getMessaging()
    .subscribeToTopic(token, UID)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { messaging, setupNotifications, auth, app, subscribe, firestore };
