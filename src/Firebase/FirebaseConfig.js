// import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  // add firebase config
  apiKey: "AIzaSyCDsL8vl5DcA8WSB_zjgWNRawmgopQK8so",
  authDomain: "esp8266-d6aa6.firebaseapp.com",
  projectId: "esp8266-d6aa6",
  storageBucket: "esp8266-d6aa6.appspot.com",
  messagingSenderId: "279650232436",
  appId: "1:279650232436:web:8e3084bf0f075d39308921",
  measurementId: "G-KQYP70D295",
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { firebase };
