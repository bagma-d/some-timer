let timerParagraph = document.querySelector('.timer');
let timerSeconds = document.querySelector('.timer__seconds');
let timerMinutes = document.querySelector('.timer__minutes');
let timerHours = document.querySelector('.timer__hours');
let timerDays = document.querySelector('.timer__days');
let timerYears = document.querySelector('.timer__years');

function seconds2Intervals(seconds) {
    let timeIntervals = [0, 0, 0, 0, 0];
    let minutes, hours, days, years;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        timeIntervals[3] = minutes;
        seconds %= 60;
        timeIntervals[4] = seconds;
    }
    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        timeIntervals[2] = hours;
        minutes %= 60;
        timeIntervals[3] = minutes;
    }
    if (hours >= 24) {
        days = Math.floor(hours / 24);
        timeIntervals[1] = days;
        hours %= 24;
        timeIntervals[2] = hours;
    }
    if (days >= 365) {
        years = Math.floor(days / 365);
        timeIntervals[0] = years;
        days %= 365;
        timeIntervals[1] = days;
    }

    /* let timeString = (years, days, hours, minutes, seconds) => {
         let result = '';
         if (years > 0) {
             result = `${result}${years}y:`;
         }
         if (days >= 0) {
             result = `${result}${days}d:`;
         }
         if (hours >= 0) {
             result = hours > 9 ? `${result}${hours}:` :
                 `${result}0${hours}h:`;
         }
         if (minutes >= 0) {
             result = minutes > 9 ? `${result}${minutes}:` :
                 `${result}0${minutes}:`;
         }
         if (seconds >= 0) {
             result = seconds > 9 ? `${result}${seconds}` :
                 `${result}0${seconds}`;
         }
         return result;
     } */

    // return timeString(years, days, hours, minutes, seconds);
    console.log(timeIntervals);
    return timeIntervals;
}

function someTimer(seconds) {

    setTimeout(() => {

        // timerParagraph.innerHTML = seconds2Intervals(seconds);
        timerYears.innerHTML = seconds2Intervals(seconds)[0];
        timerDays.innerHTML = seconds2Intervals(seconds)[1];
        timerHours.innerHTML = seconds2Intervals(seconds)[2];
        timerMinutes.innerHTML = seconds2Intervals(seconds)[3];
        timerSeconds.innerHTML = seconds2Intervals(seconds)[4];
        if (seconds > 0) {
            seconds--;
            someTimer(seconds);
        }
    }
        , 1000);
}

//someTimer(3600 * 25 * 10);
