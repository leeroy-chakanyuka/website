"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".submitted");
const thankYou = document.querySelector(".modal-text");
const form = document.getElementById("volunteerForm");

let formData = {};

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  thankYou.innerHTML = `Thank you ${formData.fullName} ❤🌳, your contribution to our community is invaluable. More details sent on your email: ${formData.email}`;
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  formData = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
  };

  // Log the values

  // Open the modal
  openModal();
});

// Add click event listeners to all "submitted" buttons
btnsOpenModal.forEach((btn, i) => {
  btn.addEventListener("click", function (e) {
    console.log(`button clicked! button ${i + 1}`);
    // The modal will be opened by the form submit event
  });
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
    location.reload();
  }
});
