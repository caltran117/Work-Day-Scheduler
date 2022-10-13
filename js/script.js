const TimeBlocksList = document.getElementById("TimeBlocksList");

var today= moment();
$("#currentDay").text(today.format("dddd MMMM DD, YYYY"));

let timeblocks = [
    "8 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
    "6 pm",
    "7 pm",
    "8 pm",
    "9 pm",
    "10 pm"
]


// short cut version of function element(){}
GenerateTimeBlocks();
GenerateTimeBlocks = () => 
    TimeBlocksList.innerHTML = "";

for (let i = 0; i < timeblocks.length; i++) {
    const RowHours = timeblocks[i];
    
}