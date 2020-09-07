(function() {
    'use strict';
    setTimeout(function(){
        // Get buttons to click
        var promptInfo = prompt("Enter Selector for Buttons to Click");

        // if text provided run rest of code
        if (typeof(promptInfo) !== 'undefined' && typeof(promptInfo) !== 'null' && promptInfo !== null && promptInfo !== '') {

            // Get all buttons with the query provided and store in a NodeList called 'buttons'
            console.log("Search Query:\n"+promptInfo);
            var buttons = document.querySelectorAll(promptInfo);

            if (buttons.length == 1) {
                console.log("Buttons Found = "+buttons.length);
                var confirmation = confirm("Button Found:\n"+buttons[0].parentElement.outerHTML);
            } else if (buttons.length == 0) {
                console.log("Buttons Found = "+buttons.length);
                alert("No Buttons Found!"+promptInfo);
                return;
            } else {
                console.log("Buttons Found = "+buttons.length);
                var confirmation = confirm("Buttons Found = "+buttons.length);
            };

            // if there are buttons found then run rest of code
            if (confirmation == true){
                // Loop through NodeList and call the click() function on each button
                var i = 0;
                function clickButton(){
                    if (i < buttons.length){
                        buttons[i].click();
                        console.log("Clicked Button");
                        console.log(buttons[i].parentElement.parentElement);
                    } else {
                        clearInterval(clickAllTheButtons);
                        console.log("Button Clicking has completed.");
                        alert("Button Clicking has completed.");
                        return;
                    };
                    i++;
                };
                var clickAllTheButtons = setInterval(clickButton, 1000);
            } else {
                console.log("Cancelled Button Clicking");
            };
        } else if (promptInfo == '') {
            console.log("Empty Search Query");
        } else {
            console.log("Cancelled Button Clicking");
        };
    }, 3000);
})();
