let timersIds;

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM готов!");
    let savedTimers = new Map();
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        savedTimers.set(key, localStorage.getItem(key));
    }
    // console.log(Array.from(savedTimers.keys()));


    timersIds = Array.from(savedTimers.keys());
    console.log(timersIds);
    let parent = document.querySelector('body');

    timersIds.forEach((id) => {
        console.log(id);
        restoreTimer(id);
    });


    function restoreTimer(timerId) {

        let timerContainer = document.createElement('div');
        timerContainer.className = "timer";
        timerContainer.id = timerId;
        let newTimerInnerHTML = document.querySelector('#timer_wrap').innerHTML;
        timerContainer.innerHTML = newTimerInnerHTML;
        parent.appendChild(timerContainer);
        someTimer(savedTimers.get(timerId), timerId);
    }
});