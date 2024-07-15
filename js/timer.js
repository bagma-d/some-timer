function seconds2Intervals(seconds) {
    let timeIntervals = [0, 0, 0, 0, 0];
    let minutes, hours, days, years;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        timeIntervals[3] = minutes;
        seconds %= 60;
        timeIntervals[4] = seconds;
    } else {
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

    return timeIntervals;
}

function someTimer(seconds, timerId) {

    let newContainer = document.getElementById(timerId);

    setTimeout(() => {
        let timerSeconds = newContainer.querySelector('.timer__seconds');
        let timerMinutes = newContainer.querySelector('.timer__minutes');
        let timerHours = newContainer.querySelector('.timer__hours');
        let timerDays = newContainer.querySelector('.timer__days');
        let timerYears = newContainer.querySelector('.timer__years');
        timerYears.innerHTML = seconds2Intervals(seconds)[0];
        timerDays.innerHTML = seconds2Intervals(seconds)[1];
        timerHours.innerHTML = seconds2Intervals(seconds)[2];
        timerMinutes.innerHTML = seconds2Intervals(seconds)[3];
        timerSeconds.innerHTML = seconds2Intervals(seconds)[4];
        if (seconds > 0) {
            seconds--;
            someTimer(seconds, timerId);
        }
    }
        , 1000);
}