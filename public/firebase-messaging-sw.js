importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
})