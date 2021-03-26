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
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var input = $(this).siblings(".input").val();

    localStorage.setItem(time, input);
});

colorChange()