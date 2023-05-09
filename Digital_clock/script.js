// let hourL = document.getElementById("hourL");
// let hourR = document.getElementById("hourR");
// let minL = document.getElementById("minL");
// let minR = document.getElementById("minR");
// let secL = document.getElementById("secL");
// let secR = document.getElementById("secR");
let wday = document.getElementById("week");
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let x = new Date();
let sec2 = x.getSeconds();
let hour2 = x.getHours();
let min2 = x.getMinutes();
let week2 = weekday[x.getDay()];

function  name1 () {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let x2 = new Date();
  let sec = x2.getSeconds();
  let hour = x2.getHours();
  let min = x2.getMinutes();
  let week = weekday[x2.getDay()];

  console.log(hour, min, sec, week)
  wday.innerText = week;

  const slides6 = document.querySelectorAll(".b6")
  slides6.forEach(
      (b6,index) => {
          b6.style.top = `${index * 100}%`
      }
  )
  var counter6 = sec%10-1;
  const slideImage6 = () => {
    slides6.forEach(
        (b6) => {
            b6.style.transform = `translateY(-${counter6 * 100}%)`
        }
    )
  }
  const goNext6 = () => {
    if(counter6===9){
        counter6=-1
        goNext5()
    }
    counter6++
    slideImage6()
  }

  const slides5 = document.querySelectorAll(".b5")
  // console.log(slides5)
  // console.log(sec%10)
  slides5.forEach(
      (b5,index) => {//Setting positions
          b5.style.top = `${index * 100}%`
          // console.log(index ,sec)
      }
  )
  var counter5 = (sec-sec%10)/10-1;
  const slideImage5 = () => {
    slides5.forEach(
        (b5) => {
            b5.style.transform = `translateY(-${counter5 * 100}%)`
        }
    )
  }
  const goNext5 = () => {
    if(counter5===5){
        counter5=-1
        goNext4()
    }
    counter5++
    slideImage5()
  }

  const slides4 = document.querySelectorAll(".b4")
  // console.log(slides5)
  // console.log(sec%10)
  slides4.forEach(
      (b4,index) => {//Setting positions
          b4.style.top = `${index * 100}%`
          // console.log(index ,sec)
      }
  )
  var counter4 = min%10-1;
  const slideImage4 = () => {
    slides4.forEach(
        (b4) => {
            b4.style.transform = `translateY(-${counter4 * 100}%)`
        }
    )
  }
  const goNext4 = () => {
    if(counter4===9){
        counter4=-1
        goNext3()
    }
    counter4++
    slideImage4()
  }

  const slides3 = document.querySelectorAll(".b3")
  // console.log(slides5)
  // console.log(sec%10)
  slides3.forEach(
      (b3,index) => {//Setting positions
          b3.style.top = `${index * 100}%`
          // console.log(index ,sec)
      }
  )
  var counter3 = (min-min%10)/10-1;
  const slideImage3 = () => {
    slides3.forEach(
        (b3) => {
            b3.style.transform = `translateY(-${counter3 * 100}%)`
        }
    )
  }
  const goNext3 = () => {
    if(counter3===5){
        counter3=-1
        goNext2()
    }
    counter3++
    slideImage3()
  }

  const slides2 = document.querySelectorAll(".b2")
  // console.log(slides5)
  // console.log(sec%10)
  slides2.forEach(
      (b2,index) => {//Setting positions
          b2.style.top = `${index * 100}%`
          // console.log(index ,sec)
      }
  )
  var counter2 = hour%10-1;
  const slideImage2 = () => {
    slides2.forEach(
        (b2) => {
            b2.style.transform = `translateY(-${counter2 * 100}%)`
        }
    )
  }
  const goNext2 = () => {
    if(((hour-hour%10)/10==2) && counter2===3){
      goNext1()
      counter2=-1
    }
    else if(counter2===9){
        counter2=-1
        goNext1()
    }
    counter2++
    slideImage2()
  }

  const slides1 = document.querySelectorAll(".b1")
  // console.log(slides5)
  // console.log(sec%10)
  slides1.forEach(
      (b1,index) => {//Setting positions
          b1.style.top = `${index * 100}%`
          // console.log(index ,sec)
      }
  )
  var counter1 = (hour-hour%10)/10-1;
  const slideImage1 = () => {
    slides1.forEach(
        (b1) => {
            b1.style.transform = `translateY(-${counter1 * 100}%)`
        }
    )
  }
  const goNext1 = () => {
    if(counter1===2){
        counter1=-1
    }
    counter1++
    slideImage1()
  }

  goNext6() //Setting the initial state

  goNext5()

  goNext4()

  goNext3()

  goNext2()

  goNext1()
}
setInterval(name1,1000);


