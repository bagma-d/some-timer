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

    timersIds.forEach((e) => {
        console.log(e);
        restoreTimer(e);
    });
    // что тут значит e? Лучше использовать что-то вроде id
    // timersIds.forEach((id) => {
    //     console.log(id);
    //     restoreTimer(id);
    // });
    // e - так обозначают error традиционно


    function restoreTimer(timerId) {

        let timerContainer = document.createElement('div');
        timerContainer.className = "timer";
        timerContainer.id = timerId;
        let newTimerInnerHTML = `<div class="timer__items">
            <div class="timer__item timer__years">00</div>
            <div class="timer__item timer__days">00</div>
            <div class="timer__item timer__hours">00</div>
            <div class="timer__item timer__minutes">00</div>
            <div class="timer__item timer__seconds">00</div>
        </div>
        <button class="run__button">
            <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">

                <title>Fill 1</title>
                <desc>Created with Sketch.</desc>
                <g id="-" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Icon/playBig" fill="#000000">
                        <path
                            d="M6,11 L11,8 L6,5 L6,11 Z M8,14.6 C4.4,14.6 1.4,11.6 1.4,8 C1.4,4.4 4.4,1.4 8,1.4 C11.6,1.4 14.6,4.4 14.6,8 C14.6,11.6 11.6,14.6 8,14.6 L8,14.6 Z M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 L8,0 Z"
                            id="Fill-1">

                        </path>
                    </g>
                </g>
            </svg>
        </button>
        <button class="delete__button">
            <svg width="20px" height="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">

                <title>delete [#1487]</title>
                <desc>Created with Sketch.</desc>
                <defs>

                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#000000">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                                d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z"
                                id="delete-[#1487]">

                            </path>
                        </g>
                    </g>
                </g>
            </svg>
        </button>`;
        timerContainer.innerHTML = newTimerInnerHTML;
        parent.appendChild(timerContainer);
        someTimer(savedTimers.get(timerId), timerId);
    }
});