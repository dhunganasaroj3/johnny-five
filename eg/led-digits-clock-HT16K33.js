var moment = require("moment");
var five = require("../lib/johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var digits = new five.Led.Digits({
    controller: "HT16K33",
  });
  var toggle = 0;

  setInterval(function() {
    // Toggle the colon part: on for a second, off for a second.
    digits.print(time(toggle ^= 1));
  }, 1000);
});

function time(isOdd) {
  var display = moment().format(
    isOdd ? "h:mm" : "h mm"
  );

  if (display.length === 4) {
    display = " " + display;
  }
  return display;
}
// @markdown
//
// Learn More:
//
// - [JavaScript: A Digital Clock with Johnny-Five](http://bocoup.com/weblog/javascript-arduino-digital-clock-johnny-five/)
//
// @markdown
