var saveBtn = $(".saveBtn");

// =============================== MOMENT JS ===============================

// Displays the time ontop of the webpage
var currentDay = moment().format("lll");
$('#currentDay').text(currentDay);


// ==================== TEXTAREA (PAST, PRESENT, FUTURE) ==================

// function to change the colour depending on the time
function colorChange() {
    var hour = moment().hours();

    $(".time").each(function() {
    
    })
};