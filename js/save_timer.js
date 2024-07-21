function seconds2save() {
    let timersMap = new Map();
    for (let timerId of timersIds) {
        let timerItems = Array.from(document.getElementById(timerId).querySelectorAll('.timer__item'));

        let secondsFromHTML = timerItems.reduce((sum, interval) => {
            if (interval.classList.contains('timer__seconds')) {
                sum += +interval.innerHTML;
            }
            if (interval.classList.contains('timer__minutes')) {
                sum += +interval.innerHTML * 60;
            }
            if (interval.classList.contains('timer__hours')) {
                sum += +interval.innerHTML * 3600;
            }
            if (interval.classList.contains('timer__days')) {
                sum += +interval.innerHTML * 3600 * 24;
            }
            if (interval.classList.contains('timer__years')) {
                sum += +interval.innerHTML * 3600 * 24 * 365;
            }
            return sum;
        }, 0);

        timersMap.set(timerId, secondsFromHTML);
    }
    return timersMap;
};

const beforeUnloadListener = (event) => {
    let map = seconds2save();
    for (let timerId of timersIds) {
        let timerSeconds = map.get(timerId);
        window.localStorage.setItem(timerId, timerSeconds);
    }
};

window.addEventListener("beforeunload", beforeUnloadListener);