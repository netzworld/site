var count = 0;
function someFunction(){

    if(document.getElementById("center-button").style.opacity > 0){
        document.getElementById("center-button").style.opacity = 0;
        count++;
    }
    else{
        document.getElementById("center-button").style.opacity = 100;
    }
    
    if(count == 10){
        document.getElementById("ten-count").style.top = "20%";
        document.getElementById("dot-clickable").style.top = "32%";
        var audio = new Audio("sound/stop-clicking-button.mp3");
        audio.play();
    }
    else if(count == 20){
        document.getElementById("dot-clickable").style.top = "-32%";
        document.getElementById("ten-count").style.top = "-20%";
        document.getElementById("twenty-count").style.top = "20%";
    }
    else if(count == 50){
        document.getElementById("twenty-count").style.top = "-20%";
        document.getElementById("fifty-count").style.top = "20%";
    }
    else if(count == 100){
        document.getElementById("fifty-count").style.top = "-20%";
        document.getElementById("hundred-count").style.top ="20%";
    }
}