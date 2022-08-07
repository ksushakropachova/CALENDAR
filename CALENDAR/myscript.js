//OLD CODE by KSU
let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();
let monthDays = document.querySelector(".calendar_days");

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
document.querySelector(".currentdate").innerHTML = day + " " + monthNames[date.getMonth()] + " " + year;

const renderCalendar = () => {

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); 
  let days = "";
  let firstDayIndex = date.getDay();
  let prevLastDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); 
  let lastDayIndex = new Date(date.getFullYear(),date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex -1;
  date.setDate(1);

  document.querySelector("#calendar_title").innerHTML = monthNames[date.getMonth()] + " " + year;

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  for (let m = 0; m < 7; m++){
    days += `<div class="dayNames">${dayNames[m]}</div>`
  }

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
}

renderCalendar();

//Buttons

document.querySelector(".calendar_btn").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".calendar_btn_next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();


























