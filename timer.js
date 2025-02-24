const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hour');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');

const countdown = "1 jan 2026";

function countdownApp() {
    const countdownDate = new Date(countdown);
    const currentDate = new Date();
    const totalseconds = (countdownDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hour = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hour);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

countdownApp(); // Panggilan awal untuk menampilkan hitungan mundur segera.

setInterval(countdownApp, 1000); // Atur interval untuk memperbarui setiap detik.