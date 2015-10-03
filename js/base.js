var clock = document.getElementById('wedding-date'),
  targetDate = new Date(clock.getAttribute('datetime')),
  updateCountdown = function() {
    clock.innerHTML = countdown(null, targetDate, countdown.YEARS|countdown.MONTHS|countdown.WEEKS|countdown.DAYS/*|countdown.HOURS|countdown.MINUTES|countdown.SECONDS*/).toString();
  };
countdown.setLabels(null, null, ', and ');
updateCountdown();
setInterval(updateCountdown, 6000);
