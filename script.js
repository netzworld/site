var count = 0;
function someFunction(){

    if(document.getElementById("center-button").style.opacity > 0){
        document.getElementById("center-button").style.opacity = 0;
        count++;
        console.log(count);
    }
    else{
        document.getElementById("center-button").style.opacity = 100;
    }
    
    if(count == 10){
        document.getElementById("ten-count").style.opacity = 100;
    }
    else if(count == 20){
        document.getElementById("ten-count").style.opacity = 0;
        document.getElementById("twenty-count").style.opacity = 100;
    }
    else if(count == 50){
        document.getElementById("twenty-count").style.opacity = 0;
        document.getElementById("fifty-count").style.opacity = 100;
    }
    else if(count == 100){
        document.getElementById("fifty-count").style.opacity = 0;
        document.getElementById("hundred-count").style.opacity = 100;
    }
}