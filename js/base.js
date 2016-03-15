;(function() {
  if(window.location.hostname != 'alexander-wedding.me' && window.location.hostname != 'localhost') {
    window.location = window.location.protocol + "//alexander-wedding.me";
  }
})();
(function(countdown) {
  var clock = document.getElementById('wedding-date'),
    targetDate = new Date(clock.getAttribute('datetime')),
    updateCountdown = function() {
      clock.innerHTML = countdown(null, targetDate, countdown.YEARS|countdown.MONTHS|countdown.WEEKS|countdown.DAYS/*|countdown.HOURS|countdown.MINUTES|countdown.SECONDS*/).toString();
    };
  countdown.setLabels(null, null, ', and ');
  updateCountdown();
  setInterval(updateCountdown, 6000);
})(window.countdown);
