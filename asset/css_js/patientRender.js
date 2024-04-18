import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDm75YBVs71GlIWC0Zvr_XlI0iytyS1GmI",
  authDomain: "ehr-demo-4f39f.firebaseapp.com",
  projectId: "ehr-demo-4f39f",
  storageBucket: "ehr-demo-4f39f.appspot.com",
  messagingSenderId: "1064346521879",
  appId: "1:1064346521879:web:05a47ed4ba5f034e742752",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const colRef = collection(db, "patients");

getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    document.getElementById("table-body").innerHTML += `<tr>
        <td>${doc.data().patientName}</td>
        <td>${doc.data().patientGender}</td>
        <td>${doc.data().patientHeight}</td>
        <td>${doc.data().patientWeight}</td>
        <td>${doc.data().patientTemp}</td>
        <td>${doc.data().patientPressure1} / ${doc.data().patientPressure2}</td>
      </tr>`;
  });
});
