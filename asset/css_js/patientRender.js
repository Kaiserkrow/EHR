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
let count = 0;
const colRef = collection(db, "patients");

getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    document.getElementById(
      "table-body"
    ).innerHTML += `<tr data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-personID="${count}">
        <td>${doc.data().patientName}</td>
        <td>${doc.data().patientGender}</td>
        <td>${doc.data().patientHeight}</td>
        <td>${doc.data().patientWeight}</td>
        <td>${doc.data().patientTemp}</td>
        <td>${doc.data().patientPressure1} / ${doc.data().patientPressure2}</td>
      </tr>`;
    count++;
  });
  const rows = document.querySelectorAll("tr[data-personID]");

  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", modalDisplay);
  }
});

function modalDisplay() {
  let surveyQ1 = null;
  let surveyQ2 = null;
  let surveyQ3 = null;
  let surveyQ4 = null;
  let surveyQ5 = null;
  let patientID;
  let patientName;
  let patientGender;
  let birthDate;
  let admissionDate;
  let patientHeight;
  let patientWeight;
  let patientTemp;
  let patientPressure1;
  let patientPressure2;
  let patientBloodType;
  let patientOccupation;
  let patientReligion;
  let patientNationality;
  let patientAddress;
  let patientCountry;
  let patientCity;
  let patientEmail;
  let patientContact1;
  let patientContact2;
  let patientEmergencyName;
  let patientEmergencyRelationship;
  let patientEmergencyContact;
  let patientEmergencyAddress;
  let patientEmergencyCountry;
  let patientEmergencyCity;
  let medicalHistorySurvey;
  let medicalHistory = [];
  let attribute = this.getAttribute("data-personID");
  let modal = document.getElementById("modal-body-entry");

  getDocs(colRef).then((snapshot) => {
    surveyQ1 = snapshot.docs[attribute].data().surveyQ1;
    surveyQ2 = snapshot.docs[attribute].data().surveyQ2;
    surveyQ3 = snapshot.docs[attribute].data().surveyQ3;
    surveyQ4 = snapshot.docs[attribute].data().surveyQ4;
    surveyQ5 = snapshot.docs[attribute].data().surveyQ5;
    patientID = snapshot.docs[attribute].data().patientId;
    patientName = snapshot.docs[attribute].data().patientName;
    patientGender = snapshot.docs[attribute].data().patientGender;
    birthDate = snapshot.docs[attribute].data().birthDate;
    admissionDate = snapshot.docs[attribute].data().admissionDate;
    patientHeight = snapshot.docs[attribute].data().patientHeight;
    patientWeight = snapshot.docs[attribute].data().patientWeight;
    patientTemp = snapshot.docs[attribute].data().patientTemp;
    patientPressure1 = snapshot.docs[attribute].data().patientPressure1;
    patientPressure2 = snapshot.docs[attribute].data().patientPressure2;
    patientBloodType = snapshot.docs[attribute].data().patientBloodType;
    patientOccupation = snapshot.docs[attribute].data().patientOccupation;
    patientReligion = snapshot.docs[attribute].data().patientReligion;
    patientNationality = snapshot.docs[attribute].data().patientNationality;
    patientAddress = snapshot.docs[attribute].data().patientAddress;
    patientCountry = snapshot.docs[attribute].data().patientCountry;
    patientCity = snapshot.docs[attribute].data().patientCity;
    patientEmail = snapshot.docs[attribute].data().patientEmail;
    patientContact1 = snapshot.docs[attribute].data().patientContact1;
    patientContact2 = snapshot.docs[attribute].data().patientContact2;
    patientEmergencyName = snapshot.docs[attribute].data().patientEmergencyName;
    patientEmergencyRelationship =
      snapshot.docs[attribute].data().patientEmergencyRelationship;
    patientEmergencyContact =
      snapshot.docs[attribute].data().patientEmergencyContact;
    patientEmergencyAddress =
      snapshot.docs[attribute].data().patientEmergencyAddress;
    patientEmergencyCountry =
      snapshot.docs[attribute].data().patientEmergencyCountry;
    patientEmergencyCity = snapshot.docs[attribute].data().patientEmergencyCity;

    medicalHistory = [...snapshot.docs[attribute].data().medicalHistory];

    console.log(patientName);

    document.getElementById(
      "staticBackdropLabel"
    ).textContent = `${patientName}`;
    modal.innerHTML = `<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#personal-info"
        aria-expanded="true"
        aria-controls="personal-info"
      >
        Personal Information
      </button>
    </h2>
    <div
      id="personal-info"
      class="accordion-collapse collapse show"
    >
      <div
        class="accordion-body d-flex justify-content-between me-5 ms-5 mt-3"
      >
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-id"
                >Patient ID <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                disabled
                value = ${patientID}
                class="validate w-100"
                type="number"
                name="patient-id"
                
                required
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label 
                >Patient Full Name
                <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                
                value = "${patientName}"
                disabled
                class="validate w-100"
                
                type="text"
                name="patient-name"
                
                required
              />
            </div>
          </div>
          <div>
            <div class="mt-3 mb-2">
              <label for="patient-gender"
                >Gender <span class="red">*</span></label
              >
            </div>
            <div class="d-flex">
              <div class=" w-100">
                <input
                  value = "${patientGender}"
                  type="text"
                  disabled
                  class="w-100"
                  id="gender1"
                  name="gender"
                  value="male"
                />
               
              </div>
              
            </div>
          </div>
          <div class="date-container">
            <label for="date-picker" class="mt-3 mb-2"
              >Date of Birth <span class="red">*</span></label
            >
            <div class="d-flex">
              <div>
                <img
                  src="./asset/calendar.png"
                  alt=""
                  id="calendar-img"
                  class="me-1"
                />
              </div>
              <div class="w-100">
                <input
                  class="birth-date date w-100"
                  type="text"
                  disabled
                  value = "${birthDate}"
                  id="date-of-birth"
                />
              </div>
            </div>
          </div>
          <div class="form-container w-100">
            <label for="date-picker" class="mt-3 mb-2"
              >Admission Date <span class="red">*</span></label
            >
            <div class="d-flex">
              <div>
                <img
                  src="./asset/calendar.png"
                  alt=""
                  id="calendar-img"
                  class="me-1"
                />
              </div>
              <div class="w-100">
                <input
                  disabled
                  value = "${admissionDate}"
                  class="date-picker date W-100"
                  type="text"
                  id="admission-date"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-height"
                >Height (m) <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                disabled
                value = "${patientHeight}"
                type="number"
                name="patient-height"
                id="patient-height"
                required
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-weight"
                >Weight (kg) <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                type="number"
                value = "${patientWeight}"
                disabled
                name="patient-weight"
                id="patient-weight"
                required
                class="w-100"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-temp"
                >Body Temperature (°C)
                <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                type="number"
                value = "${patientTemp}"
                disabled
                name="patient-temp"
                id="patient-temp"
                required
                class="w-100"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-pressure-1"
                >Blood pressure (mm HG)
                <span class="red">*</span></label
              >
            </div>
            <div class="d-flex">
              <input
                type="number"
                value = "${patientPressure1}"
                disabled
                name="patient-pressure-1"
                id="patient-pressure-1"
                class="patient-pressure"
                required
              />
              <span class="me-3 ms-3 slash"> / </span>
              <input
                type="number"
                value = "${patientPressure2}"
                disabled
                name="patient-pressure-2"
                id="patient-pressure-2"
                class="patient-pressure"
                required
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-blood"
                >Blood Type <span class="red">*</span></label
              >
            </div>
            <div>
             
            <input
                name="blood-type"
                id="blood-type"
                class="w-100"
                value = "${patientBloodType}"
                disabled
            >
               
              
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-occupation"
                >Occupation
              </label>
            </div>
            <div>
              <input
                type="text"
                value = "${patientOccupation}"
                disabled
                name="patient-occupation"
                id="patient-occupation"
                class="w-100"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-religion">Religion </label>
            </div>
            <div>
              <input
                value = "${patientReligion}"
                disabled
                type="text"
                name="patient-religion"
                id="patient-religion"
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-nationality"
                >Nationality
              </label>
            </div>
            <div>
              <input
                type="text"
                value = "${patientNationality}"
                disabled
                name="patient-nationality"
                id="patient-nationality"
                class="w-100"
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#communication-details"
        aria-expanded="true"
        aria-controls="communication-details"
      >
        Communication Details
      </button>
    </h2>
    <div
      id="communication-details"
      class="accordion-collapse collapse show"
    >
      <div
        class="accordion-body d-flex justify-content-between me-5 ms-5 mt-3"
      >
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-address"
                >Address <span class="red">*</span></label
              >
            </div>
            <div>
              <input
                value = "${patientAddress}"
                readonly
                type="text"
                name="patient-address"
                id="patient-address"
                required
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-country">Country </label>
            </div>
            <div>
              <input
                value = "${patientCountry}"
                disabled
                type="text"
                name="patient-country"
                id="patient-country"
                class="w-100"
              />
            </div>
          </div>
          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-city">City</label>
            </div>
            <div>
              <input
                value = "${patientCity}"
                disabled
                type="text"
                name="patient-city"
                id="patient-city"
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-email">Email</label>
            </div>
            <div>
              <input
              value = "${patientEmail}"
                disabled
                type="email"
                name="patient-email"
                id="patient-email"
                class="w-100"
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
        <div class="mb-4">
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-contact-1"
                >Contact No. 1
              </label>
            </div>
            <div>
              <input
                type="tel"
                value = "${patientContact1}"
                disabled
                name="patient-contact-1"
                id="patient-contact-1"
                class="w-100"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-contact-2"
                >Contact No. 2
              </label>
            </div>
            <div>
              <input
                type="tel"
                value = "${patientContact2}"
                disabled
                name="patient-contact-2"
                id="patient-contact-2"
                class="w-100"
                
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#emergency-contact"
        aria-expanded="true"
        aria-controls="emergency-contact"
      >
        Emergency Contact
      </button>
    </h2>
    <div
      id="emergency-contact"
      class="accordion-collapse collapse show"
    >
      <div
        class="accordion-body d-flex justify-content-between me-5 ms-5 mt-3"
      >
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-name">Name </label>
            </div>
            <div>
              <input
                value = "${patientEmergencyName}"
                disabled
                type="text"
                name="patient-emergency-name"
                id="patient-emergency-name"
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-relationship"
                >Relationship
              </label>
            </div>
            <div>
              <input
                value = "${patientEmergencyRelationship}"
                disabled
                type="text"
                name="patient-emergency-relationship"
                id="patient-emergency-relationship"
                class="w-100"
              />
            </div>
          </div>
          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
        <div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-contact"
                >Contact No.</label
              >
            </div>
            <div>
              <input
              value = "${patientEmergencyContact}"
                disabled
                type="tel"
                name="patient-emergency-contact"
                id="patient-emergency-contact"
                class="w-100"
              />
            </div>
          </div>
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-address"
                >Address
              </label>
            </div>
            <div>
              <input
                value = "${patientEmergencyAddress}"
                readonly
                type="text"
                name="patient-emergency-address"
                id="patient-emergency-address"
                class="w-100"
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
        <div class="mb-4">
          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-country"
                >Country
              </label>
            </div>
            <div>
              <input
                value = "${patientEmergencyCountry}"
                disabled
                type="text"
                name="patient-emergency-country"
                id="patient-emergency-country"
                class="w-100"
              />
            </div>
          </div>

          <div class="d-flex flex-column">
            <div class="mt-3 mb-1">
              <label for="patient-emergency-city">City</label>
            </div>
            <div>
              <input
                value = "${patientEmergencyCity}"
                disabled
                type="text"
                name="patient-emergency-city"
                id="patient-emergency-city"
                class="w-100"
              />
            </div>
          </div>

          <!-- used for spacing only, tamad na ako para ayusin -->
          <div class="spacing">
            <div class="d-flex ms-1">
              <div class="me-4">
                <input type="radio" />
                <label for="gender1" class="ms-1">Male</label
                ><br />
              </div>
              <div class="me-4">
                <input type="radio" />
                <label for="gender2" class="ms-1">Female</label
                ><br />
              </div>
              <div>
                <input type="radio" />
                <label for="gender3" class="ms-1">Other</label>
              </div>
            </div>
          </div>
          <!-- ===================end of spacing=================== -->
        </div>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#patient-medical-history"
        aria-expanded="true"
        aria-controls="patient-medical-history"
      >
        Patient Medical History
      </button>
    </h2>
    <div
      id="patient-medical-history"
      class="accordion-collapse collapse show"
    >
      <div
        class="accordion-body d-flex flex-column me-5 ms-5 mt-3"
      >
        <!-- =================START OF MEDICAL HISTORY BODY ==========================-->
        <div>
          <!-- <div> family history goes here</div> -->
          <div>
            <p class="question-title">
              Social History Survey <span class="red">*</span>
            </p>

            <div class="question">
              <div class="d-flex mb-3 justify-content-between">
                <label for="alcohol" class="me-5"
                  >- Do you drink alcohol?</label
                ><br />
                <div>
                  <input
                    disabled
                    type="radio"
                    name="alcohol"
                    id="alcohol-yes"
                  /><label for="alcohol-yes" class="me-5"
                    >Yes</label
                  >

                  <input
                    disabled
                    type="radio"
                    name="alcohol"
                    id="alcohol-no"
                  /><label for="alcohol-no">No</label><br />
                </div>
              </div>
            </div>

            <div class="question">
              <div class="d-flex mb-3 justify-content-between">
                <div>
                  <label for="caffeine" class="me-5"
                    >- Do you drink caffeine?</label
                  ><br />
                </div>
                <div class="d-flex">
                  <div>
                    <input
                      disabled
                      type="radio"
                      name="caffeine"
                      id="caffeine-yes"
                      class="ms-5"
                    /><label for="caffeine-yes" class="me-5"
                      >Yes</label
                    >
                  </div>
                  <div>
                    <input
                      disabled
                      type="radio"
                      name="caffeine"
                      id="caffeine-no"
                    /><label for="caffeine-no">No</label><br />
                  </div>
                </div>
              </div>
            </div>
            <div class="question">
              <div class="d-flex mb-3 justify-content-between">
                <div>
                  <label for="smoke" class="me-5"
                    >- Do you smoke?</label
                  ><br />
                </div>
                <div>
                  <input
                    disabled
                    type="radio"
                    name="smoke"
                    class="ms-5"
                    id="smoke-yes"
                  /><label for="smoke-yes" class="me-5"
                    >Yes</label
                  >
                  <input
                    disabled
                    type="radio"
                    name="smoke"
                    id="smoke-no"
                  /><label for="smoke-no">No</label><br />
                </div>
              </div>
            </div>
            <div class="question">
              <div class="d-flex justify-content-between">
                <div>
                  <label for="sexually-active" class="me-5"
                    >- Are you sexually active?</label
                  ><br />
                </div>
                <div>
                  <input
                    disabled
                    type="radio"
                    name="sexually-active"
                    id="sexually-active-yes"
                  /><label
                    for="sexually-active-yes"
                    class="me-5"
                    >Yes</label
                  >
                  <input
                    disabled
                    type="radio"
                    name="sexually-active"
                    id="sexually-active-no"
                  /><label for="sexually-active-no">No</label>
                </div>
              </div>
            </div>
            <div class="question">
              <div class="d-flex justify-content-between">
                <div>
                  <label for="std-check" class="me-5"
                    >- Do you wish to be checked for
                    STDs?</label
                  ><br />
                </div>
                <div>
                  <input
                    disabled
                    type="radio"
                    name="std-check"
                    id="std-check-yes"
                  /><label for="std-check-yes" class="me-5"
                    >Yes</label
                  >
                  <input
                    disabled
                    type="radio"
                    name="std-check"
                    id="std-check-no"
                  /><label for="std-check-no">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Vmedical-history-survey">
          <p class="question-title">
            Medical History <span class="red">*</span>
          </p>
          <p class="question-description">
            - Have you ever had any of the following?
          </p>
          <div class="question mt-4">
            <div
              class="checkbox-container d-flex justify-content-between"
            >
              <div>
                <input type="checkbox" id="none" /><label
                  for="none"
                  >NONE of the problems listed</label
                ><br />
                <input type="checkbox" id="allergies" /><label
                  for="allergies"
                  >Allergies</label
                ><br />
                <input type="checkbox" id="anemia" /><label
                  for="anemia"
                  >Anemia</label
                ><br />
                <input
                  type="checkbox"
                  id="arterial-fibrillation"
                /><label for="arterial-fibrillation"
                  >Arterial fibrillation</label
                ><br />
                <input
                  type="checkbox"
                  id="arthritis-conditions"
                /><label for="arthritis-conditions"
                  >Arthritis conditions</label
                ><br />
                <input type="checkbox" id="asthma" /><label
                  for="asthma"
                  >Asthma</label
                ><br />
                <input type="checkbox" id="bph" /><label
                  for="bph"
                  >BPH</label
                ><br />
                <input
                  type="checkbox"
                  id="bleeding-problems"
                /><label for="bleeding-problems"
                  >Bleeding problems</label
                ><br />
                <input
                  type="checkbox"
                  id="cad-coronary-artery-disease"
                /><label for="cad-coronary-artery-disease"
                  >CAD (Coronary Artery Disease)</label
                ><br />
                <input type="checkbox" id="cancer" /><label
                  for="cancer"
                  >Cancer</label
                ><br />
                <input
                  type="checkbox"
                  id="cardiac-arrest"
                /><label for="cardiac-arrest"
                  >Cardiac arrest</label
                ><br />
                <input
                  type="checkbox"
                  id="celiac-disease"
                /><label for="celiac-disease"
                  >Celiac disease</label
                ><br />
              </div>
              <div>
                <input type="checkbox" id="chest-pain" /><label
                  for="chest-pain"
                  >Chest pain</label
                ><br />
                <input
                  type="checkbox"
                  id="chronic-fatigue-syndrome"
                /><label for="chronic-fatigue-syndrome"
                  >Chronic fatigue syndrome</label
                ><br />
                <input
                  type="checkbox"
                  id="congestive-heart-failure"
                /><label for="congestive-heart-failure"
                  >Congestive heart failure</label
                ><br />
                <input type="checkbox" id="depression" /><label
                  for="depression"
                  >Depression</label
                ><br />
                <input type="checkbox" id="diabetes" /><label
                  for="diabetes"
                  >Diabetes</label
                ><br />
                <input
                  type="checkbox"
                  id="drug-alcohol-abuse"
                /><label for="drug-alcohol-abuse"
                  >Drug/alcohol abuse</label
                ><br />
                <input
                  type="checkbox"
                  id="erectile-dysfunction"
                /><label for="erectile-dysfunction"
                  >Erectile dysfunction</label
                ><br />
                <input
                  type="checkbox"
                  id="fibromyalgia"
                /><label for="fibromyalgia">Fibromyalgia</label
                ><br />
                <input type="checkbox" id="gerd" /><label
                  for="gerd"
                  >Gerd</label
                ><br />
                <input
                  type="checkbox"
                  id="heart-disease"
                /><label for="heart-disease"
                  >Heart disease</label
                ><br />
                <input
                  type="checkbox"
                  id="hyperinsulinemia"
                /><label for="hyperinsulinemia"
                  >Hyperinsulinemia</label
                ><br />
                <input
                  type="checkbox"
                  id="hyperlipidemia"
                /><label for="hyperlipidemia"
                  >Hyperlipidemia</label
                ><br />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="hypertension"
                /><label for="hypertension">Hypertension</label
                ><br />
                <input
                  type="checkbox"
                  id="hypogonadism-male"
                /><label for="hypogonadism-male"
                  >Hypogonadism male</label
                ><br />
                <input
                  type="checkbox"
                  id="hypothyroidism"
                /><label for="hypothyroidism"
                  >Hypothyroidism</label
                ><br />
                <input
                  type="checkbox"
                  id="infection-problems"
                /><label for="infection-problems"
                  >Infection problems</label
                ><br />
                <input type="checkbox" id="insomnia" /><label
                  for="insomnia"
                  >Insomnia</label
                ><br />
                <input
                  type="checkbox"
                  id="irritable-bowel-syndrome"
                /><label for="irritable-bowel-syndrome"
                  >Irritable bowel syndrome</label
                ><br />
                <input
                  type="checkbox"
                  id="kidney-problems"
                /><label for="kidney-problems"
                  >Kidney problems</label
                ><br />
                <input type="checkbox" id="menopause" /><label
                  for="menopause"
                  >Menopause</label
                ><br />
                <input
                  type="checkbox"
                  id="migraines-headaches"
                /><label for="migraines-headaches"
                  >Migraines/headaches</label
                ><br />
                <input type="checkbox" id="neuropathy" /><label
                  for="neuropathy"
                  >Neuropathy</label
                ><br />
                <input
                  type="checkbox"
                  id="onychomycosis"
                /><label for="onychomycosis"
                  >Onychomycosis</label
                ><br />
                <input
                  type="checkbox"
                  id="organ-injury"
                /><label for="organ-injury">Organ injury</label
                ><br />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="osteoporosis"
                /><label for="osteoporosis">Osteoporosis</label
                ><br />
                <input
                  type="checkbox"
                  id="pulmonary-embolism"
                /><label for="pulmonary-embolism"
                  >Pulmonary embolism</label
                ><br />
                <input
                  type="checkbox"
                  id="seizure-disorders"
                /><label for="seizure-disorders"
                  >Seizure disorders</label
                ><br />
                <input
                  type="checkbox"
                  id="shortness-of-breath"
                /><label for="shortness-of-breath"
                  >Shortness of breath</label
                ><br />
                <input
                  type="checkbox"
                  id="sinus-conditions"
                /><label for="sinus-conditions"
                  >Sinus conditions</label
                ><br />
                <input type="checkbox" id="stroke" /><label
                  for="stroke"
                  >Stroke</label
                ><br />
                <input type="checkbox" id="syndrome-x" /><label
                  for="syndrome-x"
                  >Syndrome X</label
                ><br />
                <input type="checkbox" id="tremors" /><label
                  for="tremors"
                  >Tremors</label
                ><br />
                <input
                  type="checkbox"
                  id="wheat-allergy"
                /><label for="wheat-allergy"
                  >Wheat allergy</label
                >
              </div>
            </div>
          </div>
        </div>
        <!-- =================END OF MEDICAL HISTORY BODY ==========================-->
      </div>
    </div>
  </div>
</div>`;

    if (surveyQ1 == "true") {
      document.getElementById("alcohol-yes").checked = true;
    } else {
      document.getElementById("alcohol-no").checked = true;
    }

    if (surveyQ2 == "true") {
      document.getElementById("caffeine-yes").checked = true;
    } else {
      document.getElementById("caffeine-no").checked = true;
    }

    if (surveyQ3 == "true") {
      document.getElementById("smoke-yes").checked = true;
    } else {
      document.getElementById("smoke-no").checked = true;
    }
    if (surveyQ4 == "true") {
      document.getElementById("sexually-active-yes").checked = true;
    } else {
      document.getElementById("sexually-active-no").checked = true;
    }
    if (surveyQ5 == "true") {
      document.getElementById("std-check-yes").checked = true;
    } else {
      document.getElementById("std-check-no").checked = true;
    }
    const checkboxes = document.querySelectorAll(
      "#Vmedical-history-survey input"
    );

    console.log(checkboxes);
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].setAttribute("disabled", true);
      if (medicalHistory[i] == true) {
        checkboxes[i].setAttribute("checked", true);
      }
    }
  });
}
