
var today= moment();
$("#currentDay").text(today.format("dddd MMMM DD, YYYY"));

GenerateTimeBlocks();
GenerateTimeBlocks = () => 
    TimeBlocksList.innerHTML = "";

// var timeslots = document.createElement("div");
// timeslots.textContent = `
// #box {
//     width: 100px;

// }`
// document.body.appendChild(timeslots);