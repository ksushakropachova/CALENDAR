let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();
let monthDays = document.querySelector(".calendar_days");

//NEW CODE by NeBo
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 
let days = "";
let firstDayIndex = date.getDay();
let prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
let lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex + 1;

// OLD CODE by KSU
date.setDate(1);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let calendarTitle = document.querySelector("#calendar_title");
calendarTitle.append(monthNames[month]  + " " + year);

let currentdate = document.querySelector(".currentdate" );
currentdate.append( day + " "+ monthNames[month] + " "+ year);

//NEW CODE by NeBo

for (let x = firstDayIndex; x > 0; x--){
  days += `<div class="prev-date">${prevLastDate - x + 1}</div>`
}

for (let i = 1; i <= lastDay; i++){
  if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
};

for (let j = 1; j <= nextDays; j++){
  days += `<div class="nextdate">${j}</div>`;
  monthDays.innerHTML = days;
}




























