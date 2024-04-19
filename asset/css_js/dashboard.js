import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Hindi ito secure, made for demo purposes only
const firebaseConfig = {
  apiKey: "AIzaSyDm75YBVs71GlIWC0Zvr_XlI0iytyS1GmI",
  authDomain: "ehr-demo-4f39f.firebaseapp.com",
  projectId: "ehr-demo-4f39f",
  storageBucket: "ehr-demo-4f39f.appspot.com",
  messagingSenderId: "1064346521879",
  appId: "1:1064346521879:web:05a47ed4ba5f034e742752",
};
let count = 0;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "patients");

getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    count++;
  });
});
console.log(count);
