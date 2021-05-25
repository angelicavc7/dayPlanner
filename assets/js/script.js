//show todays current date
today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));

currentHour = moment().format("hh:mm:ss");
console.log(currentHour);


var timeBlock = document.querySelectorAll("#time-block");
//var timeStart = document.querySelector("#9");
//var timeEnd = document.querySelector("#5");
var row = document.querySelector("#row");
var textAreaInput = document.querySelector("#description");

//var timeRange = moment.timeRange(startTime, endTime)
//current timer appearing on console.log

//9 am to 5pm display past, present, current time

var description = {
    textArea: textAreaInput.value,
}
console.log(description);

 
       
        


//show hours with past, present, future colors






//timeRange = moment().range(times);




//var time inputs = json.parse(localStorage.getItem('timeInputs')) {}))














   // saveBtn.addEventListener("click", function())