let saveBtn = $(".saveBtn");
let timeBlocks = $("time-block");
let appointments = {};
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  function loadAppointments () {
    appointments = localStorage.getItem("appointments");
    appointments = appointments ? JSON.parse(appointments) : {};
    return 0;
  }

  function displayAppointments () {
    for (const hour in appointments) {
      // run through each hour in localStorage
      // insert test into textarea
    }
    return 0;
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveAppointment () {
    // trigger each time a save button is clicked
    let appointment = $(".desription").val();
    let appointmentHour = parseInt($(this).attr("id").slice(-2));

    return 0;
  }
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function  updateTimeColor() {
    // run every minute to update colors
    let currentHour = parseInt(dayjs().format("HH");)
    
    for (const tBlock in timeBlocks) {
      let blockHour = parseInt(tBlock..attr("id").slice(-2));
      if {

      }
    }
    
    return 0;
  }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  let DayPlan = {}
  try {
    DayPlan = JSON.parse(localStorage.getItem("dayPlan"));
    if (DayPlan == null) {
      DayPlan = {};
    }
  } catch (e) {
    console.log("Dayplan was empty");
  }
    

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    let todayDate = dayjs().format("YYYY MMMM DD, dddd HHmm");
    $("#currentDay").text(todayDate)// +"/n"+todayTime);
    return 0;
  }

  function updateTime() {
    displayTime()
    updateTimeColor();
    return 0;
  }

  
  saveBtn.on("click", saveAppointment);
  updateTimeColors();
  displayTime();
  setInterval(updateTime, 60000)  

});
