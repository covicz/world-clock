function updateTime() {
    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("dddd, MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("hh:mm:ss [<small>]a[</small>]");

    let londonElement = document.querySelector("#london");
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd, MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("hh:mm:ss [<small>]a[</small>]");

    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("hh:mm:ss [<small>]a[</small>]");
}
updateTime()
setInterval(updateTime, 1000);
