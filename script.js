const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById('year')
const dayText = document.getElementById("daysText")
const monthText = document.getElementById("monthsText")
const yearText = document.getElementById('yearsText')
const button = document.getElementById("button")
const dayError = document.getElementById('day-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')

button.addEventListener("submit", (event) => {
  event.preventDefault(); 
  dayText.innerText = `${day.value}`;
  monthText.innerText = `${month.value}`;
  yearText.innerText = `${year.value}`;
});

day.required = true;
month.required = true;
year.required = true;



