var saveBtn = $(".saveBtn");

// =============================== MOMENT JS ===============================

// Displays the time ontop of the webpage
var currentDay = moment().format("lll");
$('#currentDay').text(currentDay);


// ==================== TEXTAREA (PAST, PRESENT, FUTURE) ==================

// function to change the colour depending on the time
function colorChange() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        // console.log(this)

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// ================================= SAVE ====================================
// saves the information to local storage
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
});


// save content even when refreshing
function savePlanner() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentInput = localStorage.getItem(currentHour)

        if(currentInput !== null) {
            $(this).siblings(".input").val(currentInput);
        }
    });
}


// ======================= DELETING SAVED PLANNER ============================

// added a end of day even at 8pm it deletes the local storage so the website is fresh
function deletePlanner() {
    endDay = moment().hours()

    if(endDay >= 20) {
        window.localStorage.clear(); 
    }
}; 

// ========================= CALL FUNCTIONS ==================================
colorChange();
savePlanner();
deletePlanner();
