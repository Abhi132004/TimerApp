let timerId;

function startTimer() {
    let hours = parseInt(document.getElementById("hours").value);
    let minutes = parseInt(document.getElementById("minutes").value);
    let seconds = parseInt(document.getElementById("seconds").value);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    // if (totalSeconds == 0) {
    //     return;
    // }
    document.getElementById("hours").disabled = true;
    document.getElementById("minutes").disabled = true;
    document.getElementById("seconds").disabled = true;
    document.getElementById("timer").innerHTML = formatTime(totalSeconds);


    let startTime = new Date().getTime();
    timerId = setInterval(function() {
        let elapsedTime = new Date().getTime() - startTime;
        let remainingSeconds = Math.round((totalSeconds * 1000 - elapsedTime) / 1000);
        if (remainingSeconds < 0) {
            clearInterval(timerId);
            showTimeUpDialog();
        } else {
            document.getElementById("timer").innerHTML = formatTime(remainingSeconds);

        }

    }, 1000);

}

function stopTimer() {
    clearInterval(timerId);
    document.getElementById("timer").innerHTML = "Need a break?";
    document.getElementById("hours").disabled = false;
    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;

}




function formatTime(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - hours * 3600 - minutes * 60;
    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
    if (number < 10) {
        return "0" + number;
    } else {
        return number;
    }
}

function showTimeUpDialog() {
    // document.getElementById("overlay").style.display = "block";
    document.getElementById("dialog").style.display = "block";
    document.getElementById("audio").play();
    document.getElementById("timer").innerHTML = "You reached to the end";
}


function hideDialog() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog").style.display = "none";
    document.getElementById("hours").disabled = false;
    document.getElementById("minutes").disabled = false;
    document.getElementById("seconds").disabled = false;
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;

    let a = 1;
    let dialogint = setInterval(function() {
        document.getElementById("timer").innerHTML = "Good Job!";
        a = a + 1;
        if (a === 5) {
            clearInterval(dialogint);
            document.getElementById("timer").innerHTML = "Go Ahead and set timer";
        }
    }, 1000)


}