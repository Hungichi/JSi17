// class timer{
//     $timerbox
//     $timerUl
//     $timerLi
//     $timebox1
//     $timebox2
//     $timebox3
//     $timebox4
//     $timebox5
//     $startBtn
//     $stopBtn

//     constructor(){
       
//     }
// }
// function get(){
//     var date = new Date("May 01 , 2023 12:10:00");
//     document.getElementById('time').innerHTML = date.getMinutes + " " + date.getSeconds;
// }
const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}

function myStop() {
  clearInterval(myInterval);
}