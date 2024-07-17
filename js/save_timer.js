const beforeUnloadListener = (event) => {
    for (let timerId of timersIds) {
        let timerContainer = document.getElementById(timerId);
        let timerSeconds = timerContainer.querySelector('.timer__items .timer__seconds').innerHTML;
        window.localStorage.setItem(`'${timerId}'`, timerSeconds);
    }
};

window.addEventListener("beforeunload", beforeUnloadListener);