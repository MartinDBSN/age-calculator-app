const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById('year')
const dayText = document.getElementById("daysText")
const monthText = document.getElementById("monthsText")
const yearText = document.getElementById('yearsText')
const form = document.querySelector("form")
const dayError = document.getElementById('day-error')
const monthError = document.getElementById('month-error')
const yearError = document.getElementById('year-error')

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const dayd = parseInt(day.value);
  const monthd = parseInt(month.value);
  const yeard = parseInt(year.value);
 
  day.required = true;
  month.required = true;
  year.required = true;

  const birthday = new Date(yeard, monthd - 1, dayd)
  const today = new Date();

  let ageInDays = today.getDate() - birthday.getDate();
  let ageInMonths = today.getMonth() - birthday.getMonth();
  let ageInYears = today.getFullYear() - birthday.getFullYear();

  if (ageInDays < 0) {
    ageInMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageInDays += lastMonth.getDate();
  }
  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  dayText.innerText = ageInDays;
  monthText.innerText = ageInMonths;
  yearText.innerText = ageInYears;

  
});





