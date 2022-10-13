

var today= moment();
$("#currentDay").text(today.format("dddd MMMM DD, YYYY"));

var timeblocks = [
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
];



GenerateTimeBlocks();
function GenerateTimeBlocks(){

for (let i = 0; i < timeblocks.length; i++) {
    var RowHours = timeblocks[i];
    
    var TimeBlocksList = document.createElement("div");
    TimeBlocksList.classList.add("TimeBlocksList");
    document.body.appendChild(TimeBlocksList);
    

    var row = document.createElement("div");
    row.classList.add("row");
    TimeBlocksList.appendChild(row);

    var hour = document.createElement("div");
    hour.innerHTML = RowHours;
    hour.classList.add("hour");
    row.appendChild(hour);
    
    var textarea = document.createElement("div");
    textarea.placeholder = "TEXT";
    row.appendChild(textarea);

    var saveBtn = document.createElement("div");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    row.appendChild(saveBtn);
}}
