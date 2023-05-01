// alert("Welcome to PET World");

function shareStory() {
  let name = prompt("What is your first name?");
  let city = prompt("What city are you from?");
  let petName = prompt("What is your pet's name?");
  let email = prompt("What is your email address?");
  let age = prompt("How old are you?");
  if (age >= 10) {
    alert(
      "Welcome PETR" +
        name +
        " " +
        "from " +
        city +
        "." +
        " " +
        "Hope " +
        petName +
        " " +
        "is having a great day!😊 "
    );
  } else {
    alert(
      "Sorry " +
        name +
        "." +
        " PET-A-PET will be waiting patiently till you turn 10. Cheers! 🐕‍🦺"
    );
  }
}
let getpetlink = document.querySelector(".shareStory");
getpetlink.addEventListener("click", shareStory);

function getpet() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  let fullName = firstName + lastName;
  let city = prompt("What city are you from?");
  city = city.toLowerCase();
  city = city.trim();
  if (city === "toledo") {
    alert(
      "Thank you very much " +
        fullName +
        " " +
        "for giving a pet a home! We @ Furry Fellows love you and would get back to you shortly.❤️😻"
    );
  } else {
    alert(
      "Sorry, you need to be from Toledo to get a furry friend from Furry Fellows.😾"
    );
  }
}
let subDetails = document.querySelector("subDetails");
subDetails.addEventListener("click", getpet);
