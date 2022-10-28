let description = $("#description");
let currentDay = $("#currentDay");

function currentTime() {
    let day = moment().format("MMM Do YYYY, HH:mm:ss");
    currentDay.text(day);
    // console.log(day)
}

setInterval(currentTime, 1000);
function updatePPFColor() {
    let currentHour = moment().format("H");
    for (let i = 09; i <= 12; i++) {
        if (i < currentHour) {
            $("#" + i).addClass("past");
        } else if (i == currentHour) {
            $("#" + i).addClass("present");
        } else if (i > currentHour) {
            $("#" + i).addClass("future");
        }
    }
}

// updatePPFColor();

$(".saveBtn").click(function () {
    let timeIndex = $(this).parent().attr("id");
    let daySchedule = $(this).parent().find("textarea").val();
    localStorage.setItem(timeIndex, daySchedule);

    console.log(timeIndex, daySchedule);
});
function getStoredSchedule() {
    for (let i = 9; i <= 12; i++) {
        let storedSchedule = localStorage.getItem(i);
        $("#" + i)
            .find("textarea")
            .text(storedSchedule);
    }
}
currentTime();
getStoredSchedule();