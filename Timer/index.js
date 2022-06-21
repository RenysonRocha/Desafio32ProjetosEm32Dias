let buttonStart = document.querySelector('#btn-start');
let buttonPause = document.querySelector('#btn-pause');
let buttonReset = document.querySelector('#btn-reset');

let hoursId = document.querySelector('#hours');
let minutesId = document.querySelector('#minutes');
let secondsId = document.querySelector('#seconds');
let miliSecondsId = document.querySelector('#miliseconds');


let hoursCount = 0
let minCount = 0
let secCount = 0
let miliSecCount = 0

let timerCount

buttonStart.addEventListener("click",()=>{
    start_Count()
})
buttonPause.addEventListener("click",()=>{
    stop_Count()
})
buttonReset.addEventListener("click",()=>{
    reset_Count()
})

function miliSeconds() {
    miliSecCount++
    if (miliSecCount < 10 ) {
        miliSecondsId.innerHTML = '0' + miliSecCount
    } else {
        miliSecondsId.innerHTML = miliSecCount
    }

    if (miliSecCount == 99) {
        miliSecCount = 0
        seconds()
    }
}

function seconds() {
    secCount++
    if (secCount < 10 ) {
        secondsId.innerHTML = '0' + secCount
    } else {
        secondsId.innerHTML = secCount
    }

    if (secCount == 59) {
        secCount = 0
        minutes()
    }
}
function minutes() {
    minCount++
    if (minCount < 10 ) {
        minutesId.innerHTML = '0' + minCount
    } else {
        minutesId.innerHTML = minCount
    }

    if (minCount == 59) {
        minCount = 0
        hours()
    }
}

function hours() {
    hoursCount++
    if (hoursCount < 10 ) {
        hoursId.innerHTML = '0' + hoursCount
    } else {
        hoursId.innerHTML = hoursCount
    }
}
function start_Count() {
    clearInterval(timerCount)
    timerCount = setInterval(()=> {
        miliSeconds()
    }, 10)
}

function stop_Count() {
    clearInterval(timerCount)
}

function reset_Count() {
    clearInterval(timerCount)
    hoursCount = 0
    minCount = 0
    secCount = 0
    miliSecCount = 0

    miliSecondsId.innerHTML = '00'
    secondsId.innerHTML = '00'
    minutesId.innerHTML = '00'
    hoursId.innerHTML = '00'
}