var timeElement = document.getElementById('time');
var appElement = document.getElementById('app');

const possibleColors = [
    'greenyellow',
    'red',
    'orange',
    'yellow',
    'lightblue',
    'lightpink'
];

// Set random border color
(function () {
    appElement.style.border = '1px ' + possibleColors[Math.floor(Math.random() * possibleColors.length)] + ' solid';
})();

// Function used to updated the time in html
function updateTime () {
    var date = new Date();
    timeElement.innerHTML = formatNum(date.getHours()) + ':' + formatNum(date.getMinutes()) + ':' + formatNum(date.getSeconds());
}

function formatNum(num){
        return ('0' + num).substr(-2);
}

// Update the time once and then start an interval method
updateTime();
setInterval(() => {
    updateTime();
}, 500)