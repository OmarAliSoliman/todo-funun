$(document).ready(function () {
  "use strict";

  moment.locale("ar-sa");
  moment().format("lll");

  var $fp = $(".filthypillow-1"),
    now = moment().subtract("seconds", 1);
  $fp.filthypillow({
    minDateTime: function () {
      return now;
    },
  });

  $fp.on("focus", function () {
    $fp.filthypillow("show");
    var btnSaveCalender = document.querySelector(".fp-save-button");
    var activeCalender = document.querySelector("td.active");
    var nameMounth = document.querySelector(".fp-cal-month");
    var tableNumber = document.querySelector(".fp-container table");
    var fbClock = document.querySelector(".fp-container .fp-clock");
    var fbCalender = document.querySelector(".fp-container .fp-calendar");
    btnSaveCalender.classList.remove("btn-primary");
    btnSaveCalender.textContent = "حفظ";
    btnSaveCalender.style.cssText =
      "font-size: 13px; color: #fff; background: #7387d9; font-family: 'Tajawal', sans-serif;";
    activeCalender.style.cssText =
      "font-size: 13px; color: #fff; background: #7387d9; font-family: 'Tajawal', sans-serif;";
    nameMounth.style.cssText =
      "color: #7387d9; font-weight: bold; font-family: 'Tajawal', sans-serif";
    tableNumber.style.cssText =
      "font-size: 13px; font-family: 'Tajawal', sans-serif;";
    fbClock.style.cssText =
      "font-size: 15px; font-family: 'Tajawal', sans-serif;";
    fbCalender.style.cssText =
      "font-size: 15px; font-family: 'Tajawal', sans-serif;";
  });
  $fp.on("fp:save", function (e, dateObj) {
    $fp.val(dateObj.format("MMM DD YYYY hh:mm A"));
    $fp.filthypillow("hide");
  });
});

var chosesButton = document.querySelector("#choses");
var chosesBox = document.querySelector(".choses-box");
var filterIcon = document.querySelector("#filter-icon");
var filterBox = document.querySelector(".filter-by");
var addListIcon = document.querySelector("#add-list-icon");
var addListBox = document.querySelector(".add-list-box");
var rememberIcon = document.querySelector("#remember-icon");
var rememberBox = document.querySelector(".remember-me-box");

var openChoseBox = false;
chosesButton.addEventListener("click", function () {
  show(chosesBox, openChoseBox);
  openChoseBox = !openChoseBox;
});

var openFilterBox = false;
filterIcon.addEventListener("click", function () {
  show(filterBox, openFilterBox);
  openFilterBox = !openFilterBox;
});

var openListBox = false;
addListIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(addListBox, openListBox);
  openListBox = !openListBox;
});

var openRememberBox = false;
rememberIcon.addEventListener("click", function (e) {
  e.preventDefault();
  show(rememberBox, openRememberBox);
  openRememberBox = !openRememberBox;
});

// var openAgentBox = false;
// agentIcon.addEventListener("click", function (e) {
//   e.preventDefault();
//   show(agentBox, openAgentBox);
//   openAgentBox = !openAgentBox;
// });

// var openPhoneBox = false;
// phoneIcon.addEventListener("click", function (e) {
//   e.preventDefault();
//   show(phoneBox, openPhoneBox);
//   openPhoneBox = !openPhoneBox;
// });

// var openEmailBox = false;
// emailIcon.addEventListener("click", function (e) {
//   e.preventDefault();
//   show(emailBox, openEmailBox);
//   openEmailBox = !openEmailBox;
// });

// var openPriceBox = false;
// priceIcon.addEventListener("click", function (e) {
//   e.preventDefault();
//   show(priceBox, openPriceBox);
//   openPriceBox = !openPriceBox;
// });

function show(Box, state) {
  if (!state) {
    Box.style.display = "block";
  } else {
    Box.style.display = "none";
  }
}
