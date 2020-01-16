var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  setInterval(() => {
    printSeconds();
  }, 1000);
}

function printMinutes() {}

function printSeconds() {
  secUni.innerHTML = chronometer.currentTime;
}

function printMilliseconds() {}

function printSplit() {}

function clearSplits() {}

function setStopBtn() {}

function setSplitBtn() {}

function setStartBtn() {}

function setResetBtn() {}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  /*   */
  if (btnLeft.innerHTML === "START") {
    chronometer.startClick();
  } else {
    chronometer.stopClick();
  }
  printTime();
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.innerHTML === "RESET") {
    chronometer.resetClick();
  } else {
    chronometer.splitClick();
  }
});
