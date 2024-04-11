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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// notification for actions
//
console.log(app);

const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

let timer1, timer2;

document.getElementById("checkbox").addEventListener("click", function (e) {
  let isChecked = document.getElementById("checkbox").checked;

  if (isChecked) {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").classList.remove("disabled");
  } else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").classList.add("disabled");
  }
});

// used to submit user information
document.getElementById("submit").addEventListener("click", async function (e) {
  e.preventDefault();
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let doesUserExist = 0;
  document.querySelector(".check").textContent = "✔";
  document.querySelector(".check").classList.remove("failed");
  document.querySelector(".text-1").textContent = "Success";
  document.querySelector(".text-2").textContent =
    "User information is saved. Go to Login";
  console.log(userName);
  console.log(password);

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (
      doc.data().userName == `${userName}` &&
      doc.data().password == `${password}`
    ) {
      doesUserExist = 1;
    }
  });

  if (doesUserExist == 1) {
    document.querySelector(".check").textContent = "✖";
    document.querySelector(".check").classList.add("failed");
    document.querySelector(".text-1").textContent = "Failed to Register.";
    document.querySelector(".text-2").textContent = "Account already exist.";
  } else {
    console.log("wala ka dito");
    try {
      const docRef = await addDoc(collection(db, "users"), {
        userName: `${userName}`,
        password: `${password}`,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
