function updateClock() {
  const options = {
    timeZone: "America/Boise",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
  };
  const formatter = new Intl.DateTimeFormat([], options);
  document.getElementById("clock").textContent = formatter.format(new Date());
}

setInterval(updateClock, 1000);
updateClock(); // run once immediately
