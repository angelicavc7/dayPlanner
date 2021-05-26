// DAY PLANNER HOMEWORK
// Setup HTML
  //get moment and bootstrap cdn links (for bootstrap:  css and JS cdn link from the docs)
  //layout the html
    //add a jumbotron that display current day and date using moment (e.g. Wed, Mar 31st)
  //create rows for hours (9am-5pm)
    //parent div / hour div / text input /save button

    //Start JavaScript
  //setup a click event on the save buttons
    // using the event.target, traverse the dom from the button to the textarea
    // also grab a unique identifier for placing the hour input value into localStorage
  // on pageload, pull all data from local storage and use the unique labels/identifiers mentioned above to determine where to put the value retrieved from localStorage
  // for determining css backgroundcolor:
    // then iterate over all hour elements
    //use moment to get the current time (specifically the hour)
   
   
    // using an id/data attribute, determining what hour the current timeblock respresents (i.e the 'moment time')
      // if the current element time is: 
        // less than moment time, its grey
        // same as moment time, its red
        // greater than moment time, its green

var hourNine = document.querySelector("#hour9");
var hourten = document.querySelector("#hour10");
var hourEleven = document.querySelector("#hour11");
var hourTwelve = document.querySelector("#hour12");
var hourOne = document.querySelector("#hour1");
var hourTwo = document.querySelector("#hour2");
var hourThree = document.querySelector("#hour3");
var hourFour = document.querySelector("#hour4");
var hourFive = document.querySelector("#hour5");
var saveBtn = document.querySelectorAll(".saveBtn")
var colorChanges = document.querySelectorAll("textarea")

//show todays current date for jumbotron 
today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));

currentHour = moment().format("hh:mm:ss");
console.log(currentHour);

// saveBtn.addEventListener
// console logs values in the hours in text area
$(".saveBtn").on("click", function () {
    console.log(this)
    var id = $(this).siblings("textarea").attr("id")
    var valueText = $(this).siblings("textarea").val()
    console.log(id, valueText)
    localStorage.setItem(id, valueText)
})

//current timer appearing on console.log
//var time inputs = json.parse(localStorage.getItem('timeInputs')) {})


hourNine = JSON.parse(localStorage.getItem("hourNine"))
hourTen = JSON.parse(localStorage.getItem("hourTen"))
hourEleven = JSON.parse(localStorage.getItem("hourEleven"))
hourTwelve = JSON.parse(localStorage.getItem("hourTwelve"))
hourOne = JSON.parse(localStorage.getItem("hourOne"))
hourTwo = JSON.parse(localStorage.getItem("hourTwo"))
hourThree = JSON.parse(localStorage.getItem("hourThree"))
hourFour = JSON.parse(localStorage.getItem("hourFour"))
hourFive = JSON.parse(localStorage.getItem("hourFive"))

// 9 am to 5pm display past, present, current time
// show hours with past, present, future colors
function colorChange() {
    var time = moment().hour()
    console.log(time)
    var group = document.querySelectorAll(".input-group");
    for (var i = 0; i < group.length; i++) {
        var span = group[i].children[0].children[0].textContent
        span = parseInt(span.split(":")[0])
        if (span >= 1 && span <= 5) {
            span += 12
        }

console.log(span)
if(span < time ){
   $("textarea").addClass("past");
}else if (span === time){
    $("textarea").addClass("present");
} else {
    $("textarea").addClass("future");
}
}
}
colorChange();



