const input = document.querySelector("#phone");

const iti = window.intlTelInput(input, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
});

document.addEventListener("DOMContentLoaded", function () {
  const prefixContainer = document.querySelector("#country-prefix");

  updatePrefix();

  function updatePrefix() {
    const countryData = iti.getSelectedCountryData();
    prefixContainer.textContent = "+" + countryData.dialCode;
  }

  input.addEventListener("focus", updatePrefix);
  input.addEventListener("change", updatePrefix);

  const form = document.querySelector("#_signup_form");
  form.addEventListener("submit", function (event) {
    document.querySelector("#phoneNumber").value = iti.getNumber();
  });
});

const allnamesincountr = JSON.parse(
  `[{"name":"María", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/5.jpg"},
    {"name":"José", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/6.jpg"},
    {"name": "Juan", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/7.jpg"},
    {"name":"Martín", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/8.jpg"},
    {"name": "Carlos", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/9.jpg"},
    {"name": "Leo", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/10.jpg"},
    {"name":"Laura", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/11.jpg"},
    {"name":"Ignacio", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/12.jpg"},
    {"name": "Valentina", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/17.jpg"},
    {"name": "Sofia", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/18.jpg"},
    {"name": "Lujan", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/19.jpg"},
    {"name": "Pedro", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/20.jpg"},
    {"name": "Miguel", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/0.jpg"},
    {"name": "Marcelo", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/1.jpg"},
    {"name": "Jhon", "pic": "https://alphatrader.best/landers/natdiaz_1718885579/img/pic/2.jpg"}]`
);

const citiesincountr = JSON.parse(
  `["San José","Alajuela","Cartago","Heredia","Guanacaste","Puntarenas","Limón","San Carlos","Puntarenas","Guanacaste","Limón","San Carlos","Puntarenas","Guanacaste","Limón"]`
);
const datamoney = 135000;
const randomNumbers = [];
setInterval(() => {
  for (let i = 1; i <= 10; i++) {
    const name = document.querySelector("#namedata-" + i);
    const moneydata = document.querySelector("#windata-" + i);
    const citidata = document.querySelector("#citydata-" + i);

    const randomNumber = Math.floor(Math.random() * 40);
    const randomcityNumber = Math.floor(Math.random() * 14);
    const moneyRandom =
      Math.random() * (datamoney * 10 - datamoney) + datamoney;
    const user = allnamesincountr[randomNumber];
    if (user && user.name) {
      name.innerHTML = user.name;
    }

    citidata.innerHTML = citiesincountr[randomcityNumber];
    moneydata.innerHTML = moneyRandom.toLocaleString("es-CR", {
      style: "currency",
      currency: "CRC",
      maximumFractionDigits: 0,
    });
  }
}, 5000);

const actual_date = document.querySelector("#hastyear");

const date = new Date();

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

actual_date.textContent = `${day} de ${month} de ${year}`;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const form = document.getElementById("_signup_form");
const modal = document.getElementById("successModal");
const span = document.querySelector(".close");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const countryData = iti.getSelectedCountryData();
  const phoneInput = document.getElementById("phone").value;
  console.log(countryData);
  const phoneNumber = libphonenumber.parsePhoneNumberFromString(
    phoneInput,
    countryData.iso2.toUpperCase()
  );

  const errorContainer = document.querySelector("#not-valid-phone");

  if (phoneNumber && phoneNumber.isValid()) {
    form.reset();

    modal.style.display = "block";
  } else {
    errorContainer.textContent = "El número de teléfono indicado no es válido";
  }
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function showNotification(message, type = "custom") {
  alertify.set("notifier", "position", "top-right");

  alertify.notify(message, type, 5, function () {});
}

function handleNotifications() {
  const viewers = getRandomAmount(10, 50);

  showNotification(
    `<div class="popup-msg"><p>${viewers} personas están viendo esto.</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
    </svg></div>`
  );

  function generateNotification() {
    const user = getRandomElement(allnamesincountr);
    const amount = formatAmount(getRandomAmount(1000000, 5000000));

    const notificationHtml = `
      <div class="ajs-facebook ajs-visible">
        <div class="imgface">
          <img src="${user.pic}" alt="${user.name}">
          <p class="fb-user"><strong>${user.name}</strong></p>
        </div>
        <div class="textface">
          <p class="pwin">acaba de generar ₡${amount} de un depósito de ₡135.000</p>
        </div>
      </div>
    `;

    showNotification(notificationHtml, "custom");
  }

  setInterval(generateNotification, 30000);
}

function formatAmount(amount) {
  return amount.toLocaleString();
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomAmount(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = handleNotifications;

function closeModal() {
  const footer = document.querySelector(".modal-content-footer");
  footer.classList.add("hidden");

  setTimeout(() => {
    footer.style.display = "none";
  }, 2000);
}
