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

var MyDate = new Date();
var MyDateString;

MyDate.setDate(MyDate.getDate());

MyDateString =
  ("0" + (MyDate.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + MyDate.getDate()).slice(-2) +
  "-" +
  MyDate.getFullYear();

console.log(MyDateString);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "patients");
const date = new Date(MyDateString);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${"0" + month}-${day}-${year}`;

let count = 0;
getDocs(colRef).then((snapshot) => {
  document.getElementById("all-patient").textContent = snapshot.docs.length;
  snapshot.docs.forEach((doc) => {
    if (doc.data().admissionDate == currentDate) {
      count++;
    }
  });
  document.getElementById("today-patient").textContent = count;
});
