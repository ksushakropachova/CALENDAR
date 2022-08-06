let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();
let monthDays = document.querySelector(".calendar_days");
let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 

date.setDate(1);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let calendarTitle = document.querySelector("#calendar_title");
calendarTitle.append(monthNames[month]  + " " + year);

let currentdate = document.querySelector(".currentdate" );
currentdate.append( day + " "+ monthNames[month] + " "+ year);

let days = "";

for (let i = 1; i <= lastDay; i++){
  days += `<div>${i}</div>`;
  monthDays.innerHTML = days;
};

console.log(lastDay)




























