/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { event } from "jquery";

const CARD = document.querySelector("#card");
const CVC = document.querySelector("#cvc");
const AMOUNT = document.querySelector("#amount");
const NAME = document.querySelector("#NAME");
const LNAME = document.querySelector("#LNAME");
const CITY = document.querySelector("#city");
const STATE = document.querySelector("#State");
const PCODE = document.querySelector("#PCODE");
const MESAGGE = document.querySelector("#message");

const FORM = document.querySelector("#form");

const VISA = document.querySelector("#visa");
const PAYPAL = document.querySelector("#paypal");
const MASTERCARD = document.querySelector("#mastercard");
const AMEX = document.querySelector("#amex");

const LCARD = document.querySelector("#LCARD");
const LCVC = document.querySelector("#LCVC");
const LAMOUNT = document.querySelector("#LAMOUNT");
const LLNAME = document.querySelector("#nameLabel");
const LastNAME = document.querySelector("#lNameLabel");
const LCITY = document.querySelector("#LCITY");
const LSTATE = document.querySelector("#LSTATE");
const LPCODE = document.querySelector("#LPCODE");
const LMESAGGE = document.querySelector("#LMESSAGE");
const LPMETHOD = document.querySelector("#LPMETHOD");

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  sendForm();
};

const sendForm = () => {
  FORM.addEventListener("submit", event => {
    event.preventDefault();

    isValidCARD();
    isValidCVC();
    isValidAMOUNT();
    isValidNAME();
    isValidLNAME();
    isValidACITY();
    isValidSTATE();
    isValidPCODE();
    isValidMpay();
    isValidMESAGGE();
  });
};

const isValidCARD = () => {
  if (
    checkCreditCardNumber(CARD.value) &&
    CARD.value != null &&
    CARD.value > 0
  ) {
    isValid(CARD);
    LCARD.innerHTML = "#Card ";
    LCARD.className = "bg-white";
  } else {
    LCARD.innerHTML = "Invalid card:";
    LCARD.className = "bg-danger p-2";
  }
};
const isValidCVC = () => {
  if (CVC.value.length > 5) {
    isInValid(CVC);
    LCVC.innerHTML = "CVC ";
    LCVC.className = "bg-white";
  } else {
    LCVC.innerHTML = "Invalid CVC";
    LCVC.className = "bg-danger p-2";
  }
};
const isValidAMOUNT = () => {
  if (checkIfNumber(AMOUNT)) {
    LAMOUNT.innerHTML = "Amount ";
    LAMOUNT.className = "bg-white";
  } else {
    LAMOUNT.innerHTML = "Invalid Amount";
    LAMOUNT.className = "bg-danger p-2";
  }
};
const isValidNAME = () => {
  if (checkIfText(NAME)) {
    LLNAME.innerHTML = "Name ";
    LLNAME.className = "bg-white";
  } else {
    LLNAME.innerHTML = "Invalid Name";
    LLNAME.className = "bg-danger p-2";
  }
};
const isValidLNAME = () => {
  if (checkIfText(LNAME)) {
    LastNAME.innerHTML = "Last Name ";
    LastNAME.className = "bg-white";
    console.log("hi");
  } else {
    LastNAME.innerHTML = "Invalid Last Name";
    LastNAME.className = "bg-danger p-2";
  }
};
const isValidACITY = () => {
  if (checkIfText(CITY)) {
    LCITY.innerHTML = "City";
    LCITY.className = "bg-white";
  } else {
    LCITY.innerHTML = "Invalid City";
    LCITY.className = "bg-danger p-2";
  }
};

const isValidSTATE = () => {
  if (STATE.value != "") {
    isValid(STATE);
    LSTATE.innerHTML = "State ";
    LSTATE.className = "bg-white";
  } else {
    isInValid(STATE);
  }
  LSTATE.innerHTML = " The state has not been chosen ";
  LSTATE.className = "bg-danger p-2";
};

const isValidMpay = () => {
  VISA.classList.remove("is-valid");
  PAYPAL.classList.remove("is-valid");
  MASTERCARD.classList.remove("is-valid");
  AMEX.classList.remove("is-valid");
  VISA.classList.remove("is-invalid");
  PAYPAL.classList.remove("is-invalid");
  MASTERCARD.classList.remove("is-invalid");
  AMEX.classList.remove("is-invalid");
  LPMETHOD.innerHTML = "Pay Method: ";
  LPMETHOD.className = "bg-white";

  if (VISA.checked) {
    isValid(VISA);
  } else if (PAYPAL.checked) {
    isValid(PAYPAL);
  } else if (MASTERCARD.checked) {
    isValid(MASTERCARD);
  } else if (AMEX.checked) {
    isValid(AMEX);
  } else {
    isInValid(VISA);
    isInValid(PAYPAL);
    isInValid(MASTERCARD);
    isInValid(AMEX);

    LPMETHOD.innerHTML = "Pay Method:";
    LPMETHOD.className = "bg-danger p-2 ";
  }
};

const isValidPCODE = () => {
  if (PCODE.value.length < 6 && PCODE.value != "") {
    isValid(PCODE);
    LPCODE.innerHTML = "Postal Code: ";
    LPCODE.className = "bg-white";
  } else {
    checkIfNumber(PCODE);
    LPCODE.innerHTML = "Invalid Postal Code";
    LPCODE.className = "bg-danger p-2 ";
  }
};

const isValidMESAGGE = () => {
  if (checkIfText(MESAGGE)) {
    isValid(PCODE);
    LMESAGGE.innerHTML = "Message ";
    LMESAGGE.className = "bg-white";
  } else {
    LMESAGGE.innerHTML = "Invalid Message";
    LMESAGGE.className = "bg-danger p-2";
  }
};

const isInValid = evento => {
  evento.classList.remove("is-valid");
  evento.classList.add("is-invalid");
};
const isValid = evento => {
  evento.classList.remove("is-invalid");
  evento.classList.add("is-valid");
};

const checkIfNumber = (number, label) => {
  if (typeof Number(number.value) != NaN && number.value > 0) {
    isValid(number);
    return true;
  } else {
    isInValid(number);
    return false;
  }
};

const checkIfText = (texto, label) => {
  if (esString(texto.value)) {
    isValid(texto);
    return true;
  } else {
    isInValid(texto);
    return false;
  }
};

const esString = Text => {
  return /^[a-zA-Z]+$/.test(Text);
};

const checkCreditCardNumber = cardNumber => {
  let s = 0;
  let doubleDigit = false;
  for (let index = cardNumber.length - 1; index >= 0; index--) {
    let digit = +cardNumber[index];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 == 0;
};
