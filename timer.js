let timerParagraph = document.querySelector('.timer');

function seconds2Intervals(seconds) {

    let minutes, hours, days, weeks, months, years;
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds %= 60;
    }
    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes %= 60;
    }
    if (hours >= 24) {
        days = Math.floor(hours / 24);
        hours %= 24;
    }
    if (days >= 365) {
        years = Math.floor(days / 365);
        days %= 365;
    }

    let timeString = (years, days, hours, minutes, seconds) => {
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
    }
    return timeString(years, days, hours, minutes, seconds);
}

function someTimer(seconds) {

    setTimeout(() => {

        timerParagraph.innerHTML = seconds2Intervals(seconds);
        if (seconds > 0) {
            seconds--;
            someTimer(seconds);
        }
    }
        , 1000);
}

someTimer(3600 * 25);
