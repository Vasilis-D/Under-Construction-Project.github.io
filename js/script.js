// ------------------------------------ Countdown  Code -----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Dec 31, 2024 23: 59: 59").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML =
        "The Website is Oficially Open.";
    }
  }, 1000);
});

// ------------------------------------ End of Countdown Code -----------------------------------------------------

// ------------------------------------- Mailchimp jquery function snippet for (Subscribe) --------------------------------------------------

(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
})(jQuery);
var $mcj = jQuery.noConflict(true);

// ---------------------------------- End of Mailchimp jquery function snippet for (Subscribe) --------------------------------------------------

// --------------------------------------- Start Of Modal Window 1 ------------------------------------------

// Get references to the modal, button, close button, and form
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var form = document.getElementById("mc-embedded-subscribe-form");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

function handleFormSubmit(event) {
  event.preventDefault();
  modal.style.display = "block";
  form.submit();
  setTimeout(function () {
    form.reset();
    modal.style.display = "none";
  }, 2000);
}

form.addEventListener("submit", handleFormSubmit);
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// --------------------------------------- End Of Modal Window 1 ------------------------------------------

// --------------------------------------- Start Of Modal Window 2 ------------------------------------------
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close")[1];

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// --------------------------------------- End Of Modal Window 2 ------------------------------------------

// -------------------------- modal 2 A9 js for appear dissapear ------------------------------------
const checkbox = document.getElementById("input-kids-input");
const a9Div = document.querySelector(".A9");

function toggleVisibility() {
  if (checkbox.checked) {
    a9Div.style.display = "block";
  } else {
    a9Div.style.display = "none";
  }
}

checkbox.addEventListener("change", toggleVisibility);
toggleVisibility();

// --------------------------End of modal 2 A9 js for appear dissapear ------------------------------------

// ------------------------- make A12 and A13 appear if ΑΝΔΡΑΣ get selected -----------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const genderSelect = document.getElementById("gender-form");
  const militaryConditionSelect = document.getElementById("military-condition");
  const militaryStatusDiv = document.querySelector(".A12");
  const dischargeYearDiv = document.querySelector(".A13");

  function initializeVisibility() {
    militaryStatusDiv.style.display = "none";
    dischargeYearDiv.style.display = "none";
  }

  function toggleVisibility() {
    const selectedGender = genderSelect.value;
    if (selectedGender === "ΑΝΔΡΑΣ") {
      militaryStatusDiv.style.display = "block";
      if (militaryConditionSelect.value === "ΝΑΙ") {
        dischargeYearDiv.style.display = "block";
      } else {
        dischargeYearDiv.style.display = "none";
      }
    } else {
      militaryStatusDiv.style.display = "none";
      dischargeYearDiv.style.display = "none";
    }
  }

  function toggleDischargeYear() {
    const selectedMilitaryCondition = militaryConditionSelect.value;
    if (selectedMilitaryCondition === "ΝΑΙ") {
      dischargeYearDiv.style.display = "block";
    } else {
      dischargeYearDiv.style.display = "none";
    }
  }

  initializeVisibility();
  genderSelect.addEventListener("change", toggleVisibility);
  militaryConditionSelect.addEventListener("change", toggleDischargeYear);
});


// --------------------------------------- End of A12 and A13 -----------------------------------------

// ---------------------------------- check if (contact us) form is valid -----------------------------------------
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let hasErrors = false;

    const name = document.getElementById("input-name-1").value.trim();
    const surname = document.getElementById("input-name-2").value.trim();
    const street = document.getElementById("input-name-3").value.trim();
    const number = document.getElementById("input-name-4").value.trim();
    const city = document.getElementById("input-name-5").value.trim();
    const region = document.getElementById("input-name-6").value.trim();
    const numberOfKids = document.getElementById("input-name-7").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender-form").value;
    const militaryCondition =
      document.getElementById("military-condition").value;
    const dischargeYear = document.getElementById("discharge-year").value;
    const education = document.getElementById("education-form").value;

    if (name === "") {
      document.getElementById("name-error").innerText =
        "Παρακαλώ συμπληρώστε το όνομα.";
      hasErrors = true;
    } else {
      document.getElementById("name-error").innerText = "";
    }

    if (surname === "") {
      document.getElementById("surname-error").innerText =
        "Παρακαλώ συμπληρώστε το επώνυμο.";
      hasErrors = true;
    } else {
      document.getElementById("surname-error").innerText = "";
    }

    if (street === "") {
      document.getElementById("street-error").innerText =
        "Παρακαλώ συμπληρώστε την οδό.";
      hasErrors = true;
    } else {
      document.getElementById("street-error").innerText = "";
    }

    if (number === "") {
      document.getElementById("number-error").innerText =
        "Παρακαλώ συμπληρώστε τον αριθμό οδού.";
      hasErrors = true;
    } else {
      document.getElementById("number-error").innerText = "";
    }

    if (city === "") {
      document.getElementById("city-error").innerText =
        "Παρακαλώ συμπληρώστε την πόλη.";
      hasErrors = true;
    } else {
      document.getElementById("city-error").innerText = "";
    }

    if (region === "") {
      document.getElementById("region-error").innerText =
        "Παρακαλώ συμπληρώστε την περιοχή.";
      hasErrors = true;
    } else {
      document.getElementById("region-error").innerText = "";
    }

    if (numberOfKids !== "" && isNaN(numberOfKids)) {
      document.getElementById("number-of-kids-error").innerText =
        "Ο αριθμός τεκνών πρέπει να είναι αριθμός.";
      hasErrors = true;
    } else {
      document.getElementById("number-of-kids-error").innerText = "";
    }

    if (birthdate === "") {
      document.getElementById("birthdate-error").innerText =
        "Παρακαλώ επιλέξτε ημερομηνία γέννησης.";
      hasErrors = true;
    } else {
      document.getElementById("birthdate-error").innerText = "";
    }

    if (gender === "Επιλέξτε") {
      document.getElementById("gender-error").innerText =
        "Παρακαλώ επιλέξτε φύλο.";
      hasErrors = true;
    } else {
      document.getElementById("gender-error").innerText = "";
    }

    if (dischargeYear !== "" && new Date(dischargeYear) > new Date()) {
      document.getElementById("discharge-year-error").innerText =
        "Το έτος απολύσεως δεν μπορεί να είναι στο μέλλον.";
      hasErrors = true;
    } else {
      document.getElementById("discharge-year-error").innerText = "";
    }

    if (education === "Επιλέξτε") {
      document.getElementById("education-error").innerText =
        "Παρακαλώ επιλέξτε επίπεδο εκπαίδευσης.";
      hasErrors = true;
    } else {
      document.getElementById("education-error").innerText = "";
    }

    if (!hasErrors) {
      document.getElementById("myModal2").style.display = "none";

      const successModal = document.getElementById("successModal");
      successModal.style.display = "block";

      setTimeout(function () {
        successModal.style.display = "none";
      }, 2000);

      document.getElementById("contactForm").reset();
    }
  });
