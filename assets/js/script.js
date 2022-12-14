let saveBtn = $(".saveBtn");
let timeBlocks = $(".time-block");
let appointments = {};
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveAppointmentsToStorage(appointments) {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }
  
  function handleAppointmentSave(event) {
    let appointment = $(this).parent().children("textarea")[0].value;
    let appointmentHour = $(this).parent().attr("id").slice(-2);
    appointments[appointmentHour] = appointment.trim();   
    saveAppointmentsToStorage(appointments);
    return 0;
  }
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function removeAddTimeClass(currentClass, timeClass) {
    let timeIndex = 0;
    if (currentClass.contains("past")) {
      currentClass.replace("past", timeClass);
    }else if (currentClass.contains("present")) {
      currentClass.replace("present", timeClass);
    } else if (currentClass.contains("future")) {
      currentClass.replace("future", timeClass);
    }
    return currentClass;
  }
  
  function  updateTimeColor() {
    // run every minute to update colors
    let currentHour = parseInt(dayjs().format("HH"));
    let currentClass = [];
    for (let i=0;i<timeBlocks.length;i++) {
      let blockHour = parseInt(timeBlocks[i].getAttribute("id").slice(-2));
      currentClass = timeBlocks[i].classList;
      if (currentHour > blockHour) {
	timeBlocks[i].classList = removeAddTimeClass(currentClass, "past");
      } else if(currentHour === blockHour) {
	timeBlocks[i].classList = removeAddTimeClass(currentClass, "present");
      } else {
	timeBlocks[i].classList = removeAddTimeClass(currentClass, "future");
      }
    }
    return 0;
  }
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?  
  function loadAppointmentsFromStorage () {
    appointments = localStorage.getItem("appointments");
    if (appointments) {
      appointments = JSON.parse(appointments)
    } else {
      appointments = {}
    }
    return 0;
  }

  function populateAppointments(){
    for (const appointmentHour in appointments) {
      let appointmentHourText = $("#hour-"+appointmentHour).children("textarea");
      appointmentHourText[0].textContent = appointments[appointmentHour];
    }
    return 0;
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

  loadAppointmentsFromStorage();
  populateAppointments()
  displayTime();
  setInterval(updateTime, 60000);
  saveBtn.on("click", handleAppointmentSave);
  updateTimeColor();

  return 0;
});

