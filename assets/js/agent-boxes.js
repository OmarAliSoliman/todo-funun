var agentIcon = document.querySelector("#agent");
var agentBox = document.querySelector(".agent-box");
var phoneIcon = document.querySelector("#phone");
var phoneBox = document.querySelector(".phone-box");
var emailIcon = document.querySelector("#email");
var emailBox = document.querySelector(".email-box");
var priceIcon = document.querySelector("#price");
var priceBox = document.querySelector(".price-box");

var openAgentBox = false;
agentIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(agentBox, openAgentBox);
  openAgentBox = !openAgentBox;
});

var openPhoneBox = false;
phoneIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(phoneBox, openPhoneBox);
  openPhoneBox = !openPhoneBox;
});

var openEmailBox = false;
emailIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(emailBox, openEmailBox);
  openEmailBox = !openEmailBox;
});

var openPriceBox = false;
priceIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(priceBox, openPriceBox);
  openPriceBox = !openPriceBox;
});

function show(Box, state) {
  if (!state) {
    Box.style.display = "block";
  } else {
    Box.style.display = "none";
  }
}
