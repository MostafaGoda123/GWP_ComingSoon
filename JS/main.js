let countDownData = new Date("1/1/2025").getTime();

setInterval(() => {

   let now = new Date().getTime() ;
   let distance = countDownData - now ;

   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days
   document.getElementById("hours").innerHTML = hours
   document.getElementById("minutes").innerHTML = minutes
   document.getElementById("seconds").innerHTML = seconds
}, 1000);

if (distance < 0) {
   document.getElementById("days").innerHTML = "00"
   document.getElementById("hours").innerHTML = "00"
   document.getElementById("minutes").innerHTML = "00"
   document.getElementById("seconds").innerHTML = "00"
}
