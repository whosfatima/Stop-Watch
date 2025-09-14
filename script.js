const para = document.querySelector('p')
const startBTN = document.getElementById('start')
const stopBTN = document.getElementById('end')
const reloadBTN = document.getElementById('reload')
let time = 0
let newNum;

startBTN.onclick=() => startHandler()
reloadBTN.onclick = () => reloadHandler()
let reloadHandler = () => {
    clearInterval(newNum)
    time=0
    para.innerHTML= `00:00:00`
    reloadBTN.disabled=true
    startBTN.disabled= false
    // stopBTN.disabled= false
}
let startHandler = () => {
    startBTN.disabled = true
    stopBTN.disabled = false
    reloadBTN.disabled=false
    clearInterval(newNum)
    newNum = setInterval(() => {
        time += 1;
        para.innerHTML = formatTime(time)
    }, 100)
}

let stopHandler = () => {
    clearInterval(newNum)
    startBTN.disabled = false
    stopBTN.disabled = true
    reloadBTN.disabled=false
}
// startBTN.addEventListener('click', startHandler)
stopBTN.addEventListener('click', stopHandler)

let formatTime = (time) => {
    let second = time % 60
    let minute = Math.floor((time % 3600) / 60)
    let hour = Math.floor(time / 3600)

    if (second < 10) second = `0${second}`
    if (minute< 10) minute = `0${minute}`
    if (hour < 10) hour = `0${hour}`

    return `${hour} : ${minute} : ${second} `
}