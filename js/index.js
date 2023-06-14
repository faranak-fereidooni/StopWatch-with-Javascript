window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let appendTens = document.getElementById("tens");
  let appendSeconds = document.getElementById("seconds");
  let buttonStart = document.getElementById("button-start");
  let buttonReset = document.getElementById("button-restart");
  let Interval;

  buttonStart.addEventListener("click", () => {
    if (buttonStart.innerText === "Start") {
      buttonStart.innerText = "Stop";
      toggleButtonsClass();
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    } else {
      toggleButtonsClass();
      buttonStart.innerText = "Start";
      stopTimer();
    }
  });

  function toggleButtonsClass() {
    buttonStart.classList.toggle("start");
    buttonStart.classList.toggle("stop");
  }

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }

  function stopTimer() {
    clearInterval(Interval);
  }

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };
};
