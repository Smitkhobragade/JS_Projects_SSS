// let hourL = document.getElementById("hourL");
// let hourR = document.getElementById("hourR");
// let minL = document.getElementById("minL");
// let minR = document.getElementById("minR");
// let secL = document.getElementById("secL");
// let secR = document.getElementById("secR");
let wday = document.getElementById("week");
let sec;
function  name1 () {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let x = new Date();
  sec = x.getSeconds();
  let hour = x.getHours();
  let min = x.getMinutes();
  let week = weekday[x.getDay()];

  console.log(hour, min, sec, week)
  // hourL.innerText = Math.trunc(hour/10);
  // hourR.innerText = (hour%10);
  // minL.innerText = Math.trunc(min/10);
  // minR.innerText = (min%10);
  // secL.innerText = Math.trunc(sec/10);
  // secR.innerText = (sec%10);
  wday.innerText = week;
}
setInterval(name1,1000);


const slides = document.querySelectorAll(".b6")
console.log(slides)
var counter = (sec%10);

slides.forEach(
    (b6,index) => {
        b6.style.bottom = `${index * 100}%`
    }
)

// setInterval(function(){
//   goNext()
// },1000,(sec%10));

// counter= sec%10;

const slideImage = () => {
  slides.forEach(
      (b6) => {
          b6.style.transform = `translateY(-${counter * 100}%)`
      }
  )
}
const goNext = () => {
  if(counter===9){
      counter=-1
  }
  counter++
  slideImage()
}

setInterval(function(){
  goNext()
},1000,Infinity);