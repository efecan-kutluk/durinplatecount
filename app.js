const orderTime = new Date("2022-05-05T00:00:00")
const orderMS = orderTime.getTime()
const domDays = document.getElementById("time")
const intervalTime = 60 * 1000
const divider = 24 * 3600 * 1000

const dayCounter = () => {
    let diff = Math.floor((Date.now() - orderMS) / divider);
    domDays.textContent = diff;
}

dayCounter();

setInterval(dayCounter, intervalTime);
