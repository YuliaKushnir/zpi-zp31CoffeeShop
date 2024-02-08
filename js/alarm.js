let alarms = [];
var sound = new Audio("../sound/pop1.wav");

function checkAlarm(){
    let now = new Date();
    for(let i = 0; i<alarms.length; i++){
        let alarm = alarms[i];
        if(alarm.date.getTime() <= now.getTime()){
            sound.onended = function(){ alert("Час робити покупки!"); };
            sound.play();
            alarms.splice(i, 1);
            updateStatus();
            break;
        }
    }
}

function updateStatus(){    
    let status = $("#alarm-status");
    if(alarms.length == 0){
        status.text("Час нагадування не встановлено");
    } else{
        let alarm = alarms[0];
        let date = alarm.date.toLocaleDateString();
        let time = alarm.date.toLocaleTimeString();
        status.text("Час нагадування встановлено на " + date + " " + time);
    }
}

function setAlarm(){
    let datetimeInput = $("#alarm-datetime");
    let datetimeValue = datetimeInput.val();
    if(datetimeValue) {
        let alarmDate = new Date(datetimeValue);
        alarms.push({date: alarmDate});
        updateStatus();
        datetimeInput.val("");
    } else {
        alert("Будь ласка, введіть дату та час!");
    }
}

function cancelAlarm(){
    if(alarms.length>0){
        alarms.pop();
        updateStatus();
    } else{
        alert("Будильник не встановлено");
    }

   
}

$("#set-alarm").click(setAlarm);
$("#cancel-alarm").click(cancelAlarm);

setInterval(checkAlarm, 1000);







// function myFunction() {
//   alert('Час робити покупки!');
// }


