let setYearsElem = document.querySelector('.set__item.timer_years');
let increaseYearsButton = setYearsElem.querySelector('.set__up');
let decreaseYearsButton = setYearsElem.querySelector('.set__down');
let yearsInputElement = setYearsElem.querySelector('.set__input');
let yearsInputValue = setYearsElem.querySelector('.set__input').value;

let setDaysElem = document.querySelector('.set__item.timer_days');
let increaseDaysButton = setDaysElem.querySelector('.set__up');
let decreaseDaysButton = setDaysElem.querySelector('.set__down');
let daysInputElement = setDaysElem.querySelector('.set__input');
let daysInputValue = setDaysElem.querySelector('.set__input').value;

let setHoursElem = document.querySelector('.set__item.timer_hours');
let increaseHoursButton = setHoursElem.querySelector('.set__up');
let decreaseHoursButton = setHoursElem.querySelector('.set__down');
let hoursInputElement = setHoursElem.querySelector('.set__input');
let hoursInputValue = setHoursElem.querySelector('.set__input').value;

let setMinutesElem = document.querySelector('.set__item.timer_minutes');
let increaseMinutesButton = setMinutesElem.querySelector('.set__up');
let decreaseMinutesButton = setMinutesElem.querySelector('.set__down');
let minutesInputElement = setMinutesElem.querySelector('.set__input');
let minutesInputValue = setMinutesElem.querySelector('.set__input').value;

let setSecondsElem = document.querySelector('.set__item.timer_seconds');
let increaseSecondsButton = setSecondsElem.querySelector('.set__up');
let decreaseSecondsButton = setSecondsElem.querySelector('.set__down');
let secondsInputElement = setSecondsElem.querySelector('.set__input');
let secondsInputValue = setSecondsElem.querySelector('.set__input').value;

function increaseYears() {
    ++yearsInputValue;
    yearsInputElement.value = yearsInputValue;
}

function decreaseYears() {
    --yearsInputValue;
    yearsInputElement.value = yearsInputValue;
}

function changeYears() {
    yearsInputValue = yearsInputElement.value;
}

increaseYearsButton.addEventListener("click", increaseYears);
decreaseYearsButton.addEventListener("click", decreaseYears);
yearsInputElement.addEventListener("input", changeYears);

function increaseDays() {
    ++daysInputValue;
    daysInputElement.value = daysInputValue;
}

function decreaseDays() {
    --daysInputValue;
    daysInputElement.value = daysInputValue;
}

function changeDays() {
    daysInputValue = daysInputElement.value;
}

increaseDaysButton.addEventListener("click", increaseDays);
decreaseDaysButton.addEventListener("click", decreaseDays);
daysInputElement.addEventListener("input", changeDays);

function increaseHours() {
    ++hoursInputValue;
    hoursInputElement.value = hoursInputValue;
}

function decreaseHours() {
    --hoursInputValue;
    hoursInputElement.value = hoursInputValue;
}

function changeHours() {
    hoursInputValue = hoursInputElement.value;
}

increaseHoursButton.addEventListener("click", increaseHours);
decreaseHoursButton.addEventListener("click", decreaseHours);
hoursInputElement.addEventListener("input", changeHours);

function increaseMinutes() {
    ++minutesInputValue;
    minutesInputElement.value = minutesInputValue;
}

function decreaseMinutes() {
    --minutesInputValue;
    minutesInputElement.value = minutesInputValue;
}

function changeMinutes() {
    minutesInputValue = minutesInputElement.value;
}

increaseMinutesButton.addEventListener("click", increaseMinutes);
decreaseMinutesButton.addEventListener("click", decreaseMinutes);
minutesInputElement.addEventListener("input", changeMinutes);

function increaseSeconds() {
    ++secondsInputValue;
    secondsInputElement.value = secondsInputValue;
}

function decreaseSeconds() {
    --secondsInputValue;
    secondsInputElement.value = secondsInputValue;
}

function changeSeconds() {
    secondsInputValue = secondsInputElement.value;
}

increaseSecondsButton.addEventListener("click", increaseSeconds);
decreaseSecondsButton.addEventListener("click", decreaseSeconds);
secondsInputElement.addEventListener("input", changeSeconds);
