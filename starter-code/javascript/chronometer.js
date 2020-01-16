class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    }, 1000);
    btnLeft.innerHTML = "STOP";
    btnLeft.classList.add("stop");
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  twoDigitsNumber(time) {
    if (time < 10 && time >= 0) {
      return `0${time}`;
    } else {
      return time.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
    btnLeft.innerHTML = "START";
    btnLeft.classList.remove("stop");
  }
  resetClick() {
    this.currentTime = 0;
    btnRight.innerHTML = "SPLIT";
    btnRight.classList.add("split");
  }

  splitClick() {
    btnRight.innerHTML = "RESET";
    btnRight.classList.remove("split");
  }
}
