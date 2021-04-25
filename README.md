# Day Scheduler by Benjamin Wilson ✨

## DESCRIPTION 😊

Quite straight forward project, because we were provided with all the classes, and HTML and styling everything was relatively easy. I Did face some small errors in my code:

- One: Background colour styling was also being included on the button which was a pretty quick fix
- Two: Accidently adding more than one time section which i just deleted the HTML code. easy fix as well

project was fun learning about how simple APIs make coding, I created a complete application with minimal code which I wouldn't have thought was possible when I started

![SCREENSHOT](https://user-images.githubusercontent.com/77607177/112697308-5f225680-8edb-11eb-94bc-1afd87bab0f7.png)

## FEATURES 💥

- Daily Planner which displays the current date and the time
- Depending on the current hour the textarea will change colours:
  - past: ![#d3d3d3](https://via.placeholder.com/20/d3d3d3/000000?text=+)
  - present: ![#ff6961](https://via.placeholder.com/20/ff6961/000000?text=+)
  - future: ![#77dd77](https://via.placeholder.com/20/77dd77/000000?text=+)
- Input area which can be saved when you click the blue save button to the right
- When you reload the page if you havent clicked the save button the text will not be saved, when you click the button the text will remain

## REPOSITORY 📁

What I have been doing to keep my repo clean and up to date:

- I have constantly used git add, commit and push to ensure all changes have been updated to the github repo
- Added extensive comments describing changes and what they could possibly mean for the client or developer
- Created a high quality read me file using different methods to convey and display info

## CODE 🖥️

> EXAMPLE: This one of my textareas/time blocks

```HTML
<!-- TIMEBLOCK -->
    <div class="container">
      <div class="row time-block" id="9">
        <div class="col-1 hour pt-2">9AM</div>
        <textarea class="col-10 input"></textarea>
        <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
      </div>
```

> EXAMPLE: this shows how I clear the local storage at the end of the day using JS and moment.js to determine if it is 8PM yet

```Javascript
function deletePlanner() {
    endDay = moment().hours()

    if(endDay >= 20) {
        window.localStorage.clear();
    }
};
```

> EXAMPLE: This is me using the API moment.js which displays the date in their preadd format - "lll"

```Javascript
var currentDay = moment().format("lll");
$('#currentDay').text(currentDay);
```

> EXAMPLE: this me using jQuery to get my elements and check their attribute named "id", then I check whether the current hour is greater equal or less than the id of each section - this will add the styling of the relevant class

```Javascript
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
```

## LINKS 🔗

[REPOSITARY](https://github.com/MarketingPlus/day-scheduler/)

[WEBSITE](https://marketingplus.github.io/day-scheduler/)

## License

  Copyright (c) Benjamin Wilson. All rights reserved.
  
  Licensed under the [MIT](LICENSE) license.
