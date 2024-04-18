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
// notification for actions
//

const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

let timer1, timer2;

const medicalHistoryNONE = document.getElementById("none");
medicalHistoryNONE.addEventListener("click", () => {
  const allChoices = document.querySelectorAll("#medical-history-survey input");
  if (allChoices[0].checked) {
    for (let i = 0; i < allChoices.length; i++) {
      if (i == 0) {
      } else {
        allChoices[i].checked = false;
        allChoices[i].setAttribute("disabled", true);
      }
    }
  } else {
    for (let i = 0; i < allChoices.length; i++) {
      if (i == 0) {
      } else {
        allChoices[i].removeAttribute("disabled");
      }
    }
  }
});

document
  .getElementById("input-submit")
  .addEventListener("click", async function (e) {
    e.preventDefault();
    let errorCount = 0;
    let surveyQ1 = null;
    let surveyQ2 = null;
    let surveyQ3 = null;
    let surveyQ4 = null;
    let surveyQ5 = null;
    const patientID = document.getElementById("patient-id").value;
    const patientName = document.getElementById("patient-name").value;
    const patientGender = document.getElementsByName("gender");
    const birthDate = document.getElementById("date-of-birth").value;
    const admissionDate = document.getElementById("admission-date").value;
    const patientHeight = document.getElementById("patient-height").value;
    const patientWeight = document.getElementById("patient-weight").value;
    const patientTemp = document.getElementById("patient-temp").value;
    const patientPressure1 =
      document.getElementById("patient-pressure-1").value;
    const patientPressure2 =
      document.getElementById("patient-pressure-2").value;
    const patientBloodType = document.getElementById("blood-type").value;
    const patientOccupation =
      document.getElementById("patient-occupation").value;
    const patientReligion = document.getElementById("patient-religion").value;
    const patientNationality = document.getElementById(
      "patient-nationality"
    ).value;
    const patientAddress = document.getElementById("patient-address").value;
    const patientCountry = document.getElementById("patient-country").value;
    const patientCity = document.getElementById("patient-city").value;
    const patientEmail = document.getElementById("patient-email").value;
    const patientContact1 = document.getElementById("patient-contact-1").value;
    const patientContact2 = document.getElementById("patient-contact-2").value;
    const patientEmergencyName = document.getElementById(
      "patient-emergency-name"
    ).value;
    const patientEmergencyRelationship = document.getElementById(
      "patient-emergency-relationship"
    ).value;
    const patientEmergencyContact = document.getElementById(
      "patient-emergency-contact"
    ).value;
    const patientEmergencyAddress = document.getElementById(
      "patient-emergency-address"
    ).value;
    const patientEmergencyCountry = document.getElementById(
      "patient-emergency-country"
    ).value;
    const patientEmergencyCity = document.getElementById(
      "patient-emergency-city"
    ).value;
    const medicalHistorySurvey = document.querySelectorAll(
      "#medical-history-survey input"
    );
    let medicalHistory = [];

    if (document.getElementById("alcohol-yes").checked) {
      surveyQ1 = true;
    } else if (document.getElementById("alcohol-no").checked) {
      surveyQ1 = false;
    }
    if (document.getElementById("caffeine-yes").checked) {
      surveyQ2 = true;
    } else if (document.getElementById("caffeine-no").checked) {
      surveyQ2 = false;
    }
    if (document.getElementById("smoke-yes").checked) {
      surveyQ3 = true;
    } else if (document.getElementById("smoke-no").checked) {
      surveyQ3 = false;
    }

    if (document.getElementById("sexually-active-yes").checked) {
      surveyQ4 = true;
    } else if (document.getElementById("sexually-active-no").checked) {
      surveyQ4 = false;
    }

    if (document.getElementById("std-check-yes").checked) {
      surveyQ5 = true;
    } else if (document.getElementById("std-check-no").checked) {
      surveyQ5 = false;
    }

    for (let i = 0; i < medicalHistorySurvey.length; i++) {
      if (medicalHistorySurvey[i].checked) {
        medicalHistory.push(true);
      } else {
        medicalHistory.push(false);
      }
    }
    // checks if there's no check in medical history
    let medicalHistoryCheck = 0;
    for (let i = 0; i < medicalHistory.length; i++) {
      if (medicalHistory[i] == true) {
      } else {
        medicalHistoryCheck++;
      }
    }

    if (medicalHistoryCheck == 45) {
      errorCount++;
    }

    console.log(medicalHistoryCheck);
    //================================================================

    // dirty dirty code (but works) input validation, checks if there's an input
    if (
      surveyQ1 == null ||
      surveyQ2 == null ||
      surveyQ3 == null ||
      surveyQ4 == null ||
      surveyQ5 == null
    ) {
      errorCount++;
    }

    if (patientID == "" || patientName == "") {
      errorCount++;
    }

    let gender = "";
    if (document.getElementById("gender1").checked) {
      gender = "M";
    } else if (document.getElementById("gender2").checked) {
      gender = "F";
    } else if (document.getElementById("gender3").checked) {
      gender = "Other";
    } else {
      errorCount++;
    }

    if (birthDate == "") {
      errorCount++;
    }
    if (patientHeight == "" || patientWeight == "" || patientTemp == "") {
      errorCount++;
    }
    if (patientPressure1 == "" || patientPressure2 == "") {
      errorCount++;
    }
    if (patientBloodType == "") {
      errorCount++;
    }
    if (patientAddress == "") {
      errorCount++;
    }

    console.log(errorCount);
    // dirty dirty code (but works) input validation, checks if there's an input
    if (errorCount == 0) {
      //you can send information to firebase
      try {
        const docRef = await addDoc(collection(db, "patients"), {
          patientId: `${patientID}`,
          patientName: `${patientName}`,
          patientGender: `${gender}`,
          birthDate: `${birthDate}`,
          admissionDate: `${admissionDate}`,
          patientHeight: `${patientHeight}`,
          patientWeight: `${patientWeight}`,
          patientTemp: `${patientTemp}`,
          patientPressure1: `${patientPressure1}`,
          patientPressure2: `${patientPressure2}`,
          patientBloodType: `${patientBloodType}`,
          patientOccupation: `${patientOccupation}`,
          patientReligion: `${patientReligion}`,
          patientNationality: `${patientNationality}`,
          patientAddress: `${patientAddress}`,
          patientCountry: `${patientCountry}`,
          patientCity: `${patientCity}`,
          patientEmail: `${patientEmail}`,
          patientContact1: `${patientContact1}`,
          patientContact2: `${patientContact2}`,
          patientEmergencyName: `${patientEmergencyName}`,
          patientEmergencyRelationship: `${patientEmergencyRelationship}`,
          patientEmergencyContact: `${patientEmergencyContact}`,
          patientEmergencyAddress: `${patientEmergencyAddress}`,
          patientEmergencyCountry: `${patientEmergencyCountry}`,
          patientEmergencyCity: `${patientEmergencyCity}`,
          surveyQ1: `${surveyQ1}`,
          surveyQ2: `${surveyQ2}`,
          surveyQ3: `${surveyQ3}`,
          surveyQ4: `${surveyQ4}`,
          surveyQ5: `${surveyQ5}`,
          medicalHistory: medicalHistory,
        });
        console.log("Document written with ID: ", docRef.id);
        location.reload();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      alert("Error: Fill up empty fields");
    }
  });
