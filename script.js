let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    let h = currentTime.getHours();
     h = h > 12 ? h - 12 : h;
     h = h == 0 ? 12 : h;
    hrs.innerHTML = (h < 10 ? "0" : "") + h;
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

