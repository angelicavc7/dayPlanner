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
//show todays current date
today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do"));

currentHour = moment().format("hh:mm:ss");
console.log(currentHour);

$(".saveBtn").on("click", function () {
    console.log(this)
    var id = $(this).siblings("textarea").attr("id")
    var valueText = $(this).siblings("textarea").val()
    console.log(id, valueText)
    localStorage.setItem(id, valueText)

})


//var timeRange = moment.timeRange(startTime, endTime)
//current timer appearing on console.log

//9 am to 5pm display past, present, current time

var description = {
    textArea: textAreaInput.value,
}
console.log(description);

 
       
        


//show hours with past, present, future colors
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




//timeRange = moment().range(times);




//var time inputs = json.parse(localStorage.getItem('timeInputs')) {}))





   // saveBtn.addEventListener("click", function())