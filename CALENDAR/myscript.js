let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

let calendarTitle = document.querySelector("#calendar_title");
calendarTitle.append(monthNames[month]  + " " + year);




