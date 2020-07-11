var min = 0;
var sec = 0;
var msec = 0;
var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecHead.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHead.innerHTML=sec;
        msec = 0;

    }

    if(sec>=60){
        min++;
        minHead.innerHTML=min;
        sec = 0;

    }


}


function startA(){
    interval = setInterval(timer,10);
    document.getElementById("start").disabled = true;

}

function pause(){
   clearInterval(interval);
   document.getElementById("start").disabled = false;

}

function resetWatch(){
 min = 0;
 sec = 0;
 msec = 0;
 minHead.innerHTML=min;
 secHead.innerHTML=sec;
 msecHead.innerHTML=msec;
 pause();
 document.getElementById("start").disabled = false;

}