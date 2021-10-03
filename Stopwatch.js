//Define vars to hold the values
let miliseconds = 0; 
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displayMiliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval =null;

//Define var to hold stopwatch status
let status ="stopped";

//Stopwatch function (logic to determine when to increment next value, elc.)
function stopWatch(){

    miliseconds++;

    //logic to determine when to determine the next value
    if(miliseconds/1000 === 1){
        miliseconds = 0;
        seconds++;
    
        if(seconds/60 === 1){
        seconds = 0;
        minutes++;

            if(minutes/60 ===1){
            minutes =0;
            hours++;
            }
        }
    }

    //If seconds/minutes/hoursrae only one digit, adda leading 0 to the value

    if(miliseconds < 10){
        displayMiliseconds= "0" + miliseconds.toString();
    }
    else{
        displayMiliseconds= miliseconds;
    }
    if(seconds < 10){
        displaySeconds= "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds; 
    }
    if(minutes < 10){
        displayMinutes ="0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }
    if(hours < 10){
        displayHours ="0" + hours.toString();
    }
    else{
        displayHours = hours;
    }


    //Display updated time values to the user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMiliseconds;
}

function startStop(){

    if(status ==="stopped"){
          //Start the stopwatch (by calling the setInterval() function )
        interval = window.setInterval(stopWatch,1);
        document.getElementById("startStop").innerHTML ="Stop";
        status = "Started";     
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
    
}
//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    miliseconds=0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}


