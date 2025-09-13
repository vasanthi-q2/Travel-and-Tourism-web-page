function showMessage() {
  alert("Thank you for choosing us! Let's plan your trip.");
}

function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name && email) {
    alert("Thank you, " + name + "! We’ll get back to you soon.");
    return true;
  } else {
    alert("Please fill out all fields.");
    return false;
  }
}
