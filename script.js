let currentDay = $("#currentDay");

function currentTime() {
    let day = moment().format("MMM Do YYYY, HH:mm:ss");
    currentDay.text(day);
    // console.log(day)
}

function updateColor() {
  let currentHour = moment().format("H");
  for (let i = 09; i <= 17; i++) {
    if (i < currentHour) {
      $("#" + i).addClass("past");
    } else if (i == currentHour) {
      $("#" + i).addClass("present");
    } else if (i > currentHour) {
      $("#" + i).addClass("future");
    }
  }
}

updateColor();

$(".saveBtn").click(function () {
    let timeIndex = $(this).parent().attr("id");
    let daySchedule = $(this).parent().find("textarea").val();
    localStorage.setItem(timeIndex, daySchedule);

    console.log(timeIndex, daySchedule);
});
function getStoredSchedule() {
    for (let i = 9; i <= 17; i++) {
        let storedSchedule = localStorage.getItem(i);
        $("#" + i)
            .find("textarea")
            .text(storedSchedule);
    }
}
currentTime();
getStoredSchedule();