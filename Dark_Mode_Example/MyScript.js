let banner = document.querySelector(".banner");
let dayNight = document.querySelector(".dayNight");
dayNight.onclick = function () {
  dayCSS();
  banner.classList.toggle("night");
  nightCSS();
};

function dayCSS() {
  banner.style.backgroundColor = "#fff";
  var day = document.querySelector(".dayNight ion-icon:nth-child(1)");
  day.style.display = "block";
  var night = document.querySelector(".dayNight ion-icon:nth-child(2)");
  night.style.display = "none";
  var lightMode = document.querySelectorAll(".white");
  lightMode.forEach((element) => {
    element.style.color = "#111";
  });
}

function nightCSS() {
  let banner1 = document.querySelector(".banner.night");
  banner1.style.backgroundColor = "#333";
  var day = document.querySelector(".dayNight ion-icon:nth-child(2)");
  day.style.display = "block";
  var night = document.querySelector(".dayNight ion-icon:nth-child(1)");
  night.style.display = "none";
  var darkMode = document.querySelectorAll(".white");
  darkMode.forEach((element) => {
    element.style.color = "#fff";
  });
}
