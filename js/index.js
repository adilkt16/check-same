// Set the date we're counting down to
var countDownDate = new Date().setHours(24, 0, 0, 0);
// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("day-number").innerHTML = days;
    document.getElementById("hour-number").innerHTML = hours;
    document.getElementById("minute-number").innerHTML = minutes;
    document.getElementById("second-number").innerHTML = seconds;
    document.getElementById("hour-number-cta").innerHTML = hours;
    document.getElementById("minute-number-cta").innerHTML = minutes;
    document.getElementById("second-number-cta").innerHTML = seconds;
    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

// timer ended here 


$("div.activeone").click(function() {
        $("div.activeone div.clicked").slideToggle(500, function() {
            
        });
        });

        $("div.activetwo").click(function() {
            $("div.activetwo div.clicked").slideToggle(500, function() {
                
            });
            });

            $("div.activethree").click(function() {
                $("div.activethree div.clicked").slideToggle(500, function() {
                    
                });
                });

                $("div.activefour").click(function() {
                    $("div.activefour div.clicked").slideToggle(500, function() {
                        
                    });
                    });


// question-part ended

//bottom-sticky started 

// $("#sticky").hide();


    