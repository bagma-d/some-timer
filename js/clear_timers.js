let clearButton = document.querySelector('.clear');

clearButton.onclick = () => {
    window.localStorage.clear();
    timersIds = [];
    document.querySelectorAll('.timer').forEach(e => e.remove());
}