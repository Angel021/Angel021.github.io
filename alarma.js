function vib(vibVal) {
  if (vibVal == 1) {
    if (navigator.vibrate) {
      window.navigator.vibrate([
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500,
        1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000, 500, 1000,
        500, 1000,
      ]);
    }
  } else {
    if (navigator.vibrate) {
      window.navigator.vibrate(0);
    }
  }
}

var form = document.querySelector(".form");
var openBtn = document.querySelector(".open");
openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("openAct");
  form.classList.toggle("formOn");
});

var btn = document.querySelector(".save");

var btn2 = document.querySelector(".openB2");

var error1 = document.querySelector(".error1");
var error2 = document.querySelector(".error2");
var aud = document.querySelector("audio");
var ringBtn = document.querySelector(".ringtone");
btn.addEventListener("click", () => {
  var label = document.querySelector("#alLabel").value;
  var dateInp = document.querySelector("#dateTime");

  var inpDate = new Date(dateInp.value);

  var today = new Date().getTime();
  var diff = inpDate - today;

  var ms = diff;
  var sec = diff / 1000;
  var min = sec / 60;
  var hr = min / 60;

  var timeDec;
  if (sec < 59) {
    timeDec = `${Math.floor(sec)} Seconds`;
  } else if (min < 60) {
    timeDec = `${Math.floor(min)} Minute(s)`;
  } else {
    timeDec = `${Math.floor(hr)} Hour(s)`;
  }

  if (diff <= 0 || dateInp.value == "") {
    error2.style.opacity = 1;
  } else {
    error2.style.opacity = 0;

    var notify = document.querySelector(".notify");
    notify.innerHTML = `Alarm Set In ${timeDec}`;
    notify.classList.add("notify-on");

    var labelAl = document.querySelector(".labelAl");

    if (label == "") {
      label = "No Label";
    }
    labelAl.innerHTML = label;
    setTimeout(() => {
      notify.classList.remove("notify-on");
    }, 2500);

    //Setting Time
    var hrsIn = document.querySelector(".hrs");
    var minIn = document.querySelector(".minutes");
    var secIn = document.querySelector(".seconds");

    var callIt = setInterval(countIt, 1000);
    function countIt() {
      //Set Countdown
      var timer = new Date();
      var h4 = document.querySelector("h4");
      var h = document.querySelector("h3");
      var cntdwn = document.querySelector(".cntdwn");
      var timeInSec = timer.getTime();

      var dateFInp = new Date(dateInp.value);
      var timeDiff = dateFInp - timeInSec;

      var diffS = Math.floor((timeDiff % (1000 * 60)) / 1000);
      if (diffS < 10) {
        diffS = "0" + diffS;
      }
      var diffM = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      if (diffM < 10) {
        diffM = "0" + diffM;
      }

      var diffH = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      if (diffH < 10) {
        diffH = "0" + diffH;
      }

      var diffD = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      if (diffD < 10) {
        diffD = "0" + diffD;
      }

      var dayCnt = document.querySelector(".day-cnt");
      var hrCnt = document.querySelector(".hrs-cnt");
      var minCnt = document.querySelector(".min-cnt");
      var secCnt = document.querySelector(".sec-cnt");

      if (timeDiff < 0) {
        diffD = `00`;
        diffH = `00`;
        diffM = `00`;
        diffS = `00`;
        cntdwn.classList.add("cntdwnOut");
        h.classList.add("outH");
        h4.classList.add("on");
        clearInterval(callIt);
        vib(1);
        btn2.classList.toggle("openB2On");
        ringBtn.classList.toggle("ringtoneOn");
      }
      dayCnt.innerHTML = diffD;
      hrCnt.innerHTML = diffH;
      minCnt.innerHTML = diffM;
      secCnt.innerHTML = diffS;
    }

    setInterval(() => {
      var timer = new Date();
      var secTimer = timer.getSeconds();

      if (secTimer < 10) {
        secTimer = "0" + secTimer;
      }

      var minTimer = timer.getMinutes();

      if (minTimer < 10) {
        minTimer = "0" + minTimer;
      }

      var hrTimer = timer.getHours();

      if (hrTimer < 10) {
        hrTimer = "0" + hrTimer;
      }

      secIn.innerHTML = secTimer;
      minIn.innerHTML = minTimer;
      hrsIn.innerHTML = hrTimer;

      //Set Greeting
      var greet;
      if (hrTimer >= 5 && hrTimer < 12) {
        greet = "Good Morning";
      } else if (hrTimer >= 12 && hrTimer < 18) {
        greet = "Good Afternoon";
      } else {
        greet = "Good Evening";
      }
      var greetings = document.querySelector("h2");
      greetings.innerHTML = greet;

      var am = document.querySelector(".am");

      var amD;
      if (hrTimer < 12) {
        amD = "AM";
      } else {
        amD = "PM";
      }

      am.innerHTML = amD;
    }, 1000);

    var slide1 = document.querySelector(".slide1");
    var slide2 = document.querySelector(".slide2");
    slide1.classList.add("slide1An");
    slide2.classList.add("slide2An");
  }
});

btn2.addEventListener("click", () => {
  var h4 = document.querySelector("h4");
  var h = document.querySelector("h3");
  var cntdwn = document.querySelector(".cntdwn");
  var slide1 = document.querySelector(".slide1");
  var slide2 = document.querySelector(".slide2");
  setTimeout(() => {
    slide1.classList.remove("slide1An");
    slide2.classList.remove("slide2An");
  }, 800);

  cntdwn.classList.remove("cntdwnOut");
  h.classList.remove("outH");
  h4.classList.remove("on");
  btn2.classList.toggle("openB2On");
  aud.load();
  vib(0);
});

ringBtn.addEventListener("click", () => {
  ringBtn.classList.toggle("ringtoneOn");
  aud.play();
});
