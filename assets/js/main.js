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
    $(fbClock).on("click", function () {
      $(this).focus();
    });
  });
  $fp.on("fp:save", function (e, dateObj) {
    $fp.val(dateObj.format("MMM DD YYYY hh:mm A"));
    $fp.filthypillow("hide");
  });

  $(".add-task").niceScroll();
  $(".tasks").niceScroll();
  $(".pages").niceScroll();
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
});


function show(Box, state) {
  if (!state) {
    Box.style.display = "block";
  } else {
    Box.style.display = "none";
  }
}


var closeItemBox = document.querySelector('.close-box');
closeItemBox.addEventListener('click', ()=>{
  rememberBox.style.display= "none";
})


var openTaskPage = false;
var listTasks = document.querySelectorAll(".list-tasks");
var addTaskCol = document.querySelector(".add-task-col");
var pageCol = document.querySelector(".pages");
console.log(listTasks);
listTasks.forEach((task, index) => {
  task.addEventListener("click", () => {
    if (!openTaskPage) {
      addTaskCol.classList.remove("col-lg-9");
      addTaskCol.classList.add("col-lg-6");
      pageCol.style.display = "block";
    } 
    // else {
    //   addTaskCol.classList.remove("col-lg-6");
    //   addTaskCol.classList.add("col-lg-9");
    //   pageCol.style.display = "none";
    // }
    // openTaskPage = !openTaskPage;
  });
});

var starColor = false;
var faStar = document.querySelectorAll(".list-tasks .fa-star");
faStar.forEach((star, index) => {
  star.addEventListener("click", () => {
    if (!starColor) {
      star.style.color = "blue";
    } else {
      star.style.color = "#858585";
    }
    starColor = !starColor;
  });
});

var completeBox = document.querySelector(".compleate-tasks");
var completeTasksUl = document.querySelector(".complete-ul-tasks");
var completeChevron = document.querySelector(".complete-chevron");

completBoxOpen = false;
completeBox.addEventListener("click", () => {
  if (!completBoxOpen) {
    completeTasksUl.style.display = "none";
    completeChevron.classList.remove("fa-chevron-down");
    completeChevron.classList.add("fa-chevron-up");
  } else {
    completeTasksUl.style.display = "block";
    completeChevron.classList.add("fa-chevron-down");
    completeChevron.classList.remove("fa-chevron-up");
  }
  completBoxOpen = !completBoxOpen;
});

var arrowClosePage = document.querySelector(".arrow-close-page");
arrowClosePage.addEventListener("click", () => {
  addTaskCol.classList.remove("col-lg-6");
  addTaskCol.classList.add("col-lg-9");
  pageCol.style.display = "none";
});
