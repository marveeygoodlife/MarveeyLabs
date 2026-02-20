"use strict"

console.log("LET'S GO!!!")

const form = document.querySelector("#myform");
const button = document.querySelector("#button");
let valid = true;

//add submit event listener to form
document.getElementById("myform").addEventListener("submit", (e)=>{
e.preventDefault();// prevent default submission
const errorMessage = document.getElementById("error-message"); errorMessage.innerText = "";
const errorDiv = document.querySelector(".error-message");

//get inputs elements from DOM
const firstName = document.getElementById("firstname").value.trim();const firstNameError = document.getElementById("firstnameError");

const lastName = document.getElementById("lastname").value.trim();const lastNameError = document.getElementById("lastnameError");

const email = document.getElementById("email").value.trim();const emailError = document.getElementById("emailError");

const phoneNumber = document.getElementById("telephone").value.trim();const phoneError = document.getElementById("telephoneError");

const companyName = document.getElementById("companyname").value.trim();
const companyRole = document.getElementById("role").value.trim(); const findUs = document.getElementById("connect").value.trim();
const date = document.getElementById("date").value;
//get user data from select fields

//select work profession
const studentOption = document.getElementById("studentoption").value;//select Element

//select experience years
const workExperience = document.getElementById("jobyears").value; // get  element value

//Reason to register select
const  registerProgram = document.getElementById("regprogram").value; const registerError = document.getElementById("registerError");

//Intership duration
const internship = document.getElementById("duration").value; const internError = document.getElementById("internError");

//choose country
const country = document.getElementById("country").value;
const countryError = document.getElementById("countryError");

//terms and condition
const checkbox = document.getElementById("terms").checked; const checkBoxError = document.getElementById("checkError");

// Clear old errors
firstNameError.textContent = ""; lastNameError.textContent = ""; emailError.textContent = "";
registerError.textContent = ""; internError.textContent = ""; checkBoxError.textContent = ""; countryError.textContent = ""; phoneError.textContent = "";

//validate inputs
if (!firstName) {
firstNameError.textContent = "Full Name is Required!.";
valid = false;
return;
};
if (!lastName) {
lastNameError.textContent = "Last Name is Required!.";
valid = false;
return;

};
if (!email) {
emailError.textContent = "Email   is Required!.";
valid = false;
return;

};
if (!phoneNumber) {
phoneError.textContent = "  Number is Required!.";
valid = false;
return;
};
if (!registerProgram) {
    registerError.textContent = "  This Field is Required!.";
    valid = false;
    return;
    };
if (!internship) {
    internError.textContent = "  Intern duration is Required!.";
    valid = false;
    return;
    };
if (!country) {
countryError.textContent = "  Please select Country!.";
valid = false;
return;
};
if (!checkbox) {
checkBoxError.textContent = "  Terms is Required!.";
valid = false;
return;
};

    errorMessage.style.display = "block";
    errorMessage.style.color = "green";
    errorMessage.innerText = "Congratulations Form Submitted Successfully";


const userData = {
    firstName,
    lastName,
    email,
    phoneNumber,
    studentOption,
    companyName,
    companyRole,
    workExperience,
    date,
    registerProgram,
    internship,
    country,
    findUs,
    checkbox, 
    };
console.log("USER DATA:", userData);

});

  