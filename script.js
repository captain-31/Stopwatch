// get html where digits to update
const milliseconds = document.querySelector('.milliseconds');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');

// btn html
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

// initialize milliseconds, seconds, minutes & hours
var ms = 1;
var h = m = s = 0 ;

// var isPaused = false; 
var intervalID = null;

// set click listener
document.addEventListener('click', handleClickEvent);

function startTimer() {
    intervalID = setInterval(startMilliseconds, 10);
}

function startMilliseconds() {
    if(ms == 99) {
        startSeconds();
        ms = 1;
    }
    milliseconds.innerHTML = ms;
    ms++;
}

function startSeconds() {
    s++;
    if(s == 59) {
        startMinutes();
        s = 0;
    }
    seconds.innerHTML = s;
    // update title of page
    document.querySelector('title').textContent =  `${h == 0 ? '' : h +':'} ${m}:${s} - Stopwatch`;
}

function startMinutes() {
    m++;
    if(m == 59) {                                                     
        startHours();
        m = 0;
    }
    minutes.innerHTML = m;
}

function startHours() {
    h++;
    hours.innerHTML = h;
}

function resetTimer() {
    // clear interval
    clearInterval(intervalID);

    // reset vars
    ms = s = m = h = 1;

    // reset html
    seconds.innerHTML = minutes.innerHTML = hours.innerHTML = '0';
    milliseconds.innerHTML = '00';
}


function handleClickEvent(e) {
    const action = e.target.dataset.action;
    
    if(action === 'start') {
        startTimer();
        startBtn.style.display = 'none';
        stopBtn.style.display = 'initial';
    }

    if(action === 'reset') {
        resetTimer();
        startBtn.style.display = 'initial';
        stopBtn.style.display = 'none';
    }

    if(action === 'stop') {
        intervalID = clearInterval(intervalID);
        startBtn.style.display = 'initial';
        stopBtn.style.display = 'none';

    }
}