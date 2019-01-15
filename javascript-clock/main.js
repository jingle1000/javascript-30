document.addEventListener("DOMContentLoaded", function(e){
    var minuteHand = document.querySelector('.minute');
    var secondHand = document.querySelector('.second');

    function getDate() {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const secDegrees = seconds * 6;
        const minDegrees = minutes * 6;
        secondHand.style.transform = `rotate(${parseInt(secDegrees)}deg)`;
        minuteHand.style.transform = `rotate(${parseInt(minDegrees)}deg)`;
    }

    setInterval(getDate, 1000);
});