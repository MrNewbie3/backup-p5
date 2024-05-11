// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging,  getToken, onMessage} from "firebase/messaging";
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
  measurementId: "G-LS0GXX65NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
const setupNotifications =  async () => {
    try {
        // request izin notif
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('Notifications permission granted');
            // get FCM Token
            try {
                
                const token = await getToken(messaging);
                console.log('FCM Token', token);
            } catch (error) {
                console.log(error)
            }
            console.log("is the token work?")
        } else {
            console.log('Notification permission denied.');
        }
        // notif foreground (lagi dipantengin)
        onMessage(messaging, (payload) => {
            console.log('Foreground Message:', payload);
        })
    } catch (error) {
        console.error('Error setting up notifications:', error);
    }
}

export {messaging, setupNotifications}