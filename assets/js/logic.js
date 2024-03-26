console.log("logic");

//Change from day mode to night mode

//Set variables for section.
const dayNight = document.body
const dayNightBtn = document.getElementById("day-night-btn");
const dayNightTitle = document.getElementById("day-night-title")

//Get value of whatever is saved in localStorage 'mode' key
let storedClass = localStorage.getItem('mode');
console.log(`stored class coming into page is ${storedClass}`);

//If storedClass's value is dark-mode in localStorage, page dark-mode, otherwise default
if (storedClass == "dark-mode") {
  dayNight.classList.add("dark-mode") 
}
else {
  dayNight.classList.remove("dark-mode")
};
console.log(`console log what dayNight.classList is     ${dayNight.classList}`);

//Click on change mode button and classList will toggle and if dark mode, it will register to localStorage as a value of a key
dayNightBtn.addEventListener("click", function () {
  dayNight.classList.toggle("dark-mode");
  console.log(`console log what dayNight.classList is ${dayNight.classList}`);
if (dayNight.classList == "dark-mode") {
  localStorage.setItem('mode', dayNight.classList);
}
else {
  localStorage.setItem('mode', "")
}

//Display in text which mode you are on above button
if (dayNight.classList == "dark-mode") {
  dayNightTitle.textContent = "Dark Mode"
}

else {
  dayNightTitle.textContent = "Day Mode"
}

});

//Gaming pc rainbow light change effect

//Set variables for section
 const rainbowLogo = document.getElementById("rainbow-change");
 const rainbowHeader = document.querySelector(".brand");
 const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
 let rainbowColorsIndex = 0

 
//Set interval to change colors every 500 ms
setInterval(function() {
  // Change the color
  rainbowLogo.style.color = rainbowColors[rainbowColorsIndex];
 
  if (rainbowColorsIndex+1 > rainbowColors.length-1) {
      rainbowHeader.style.color = rainbowColors[1];
  }
  else if (rainbowColorsIndex+2 > rainbowColors.length-1) {
      rainbowHeader.style.color = rainbowColors[0];
  }
  else {
      rainbowHeader.style.color = rainbowColors[rainbowColorsIndex+2];
  }
  // Increment the index to move to the next color
  // rainbowColorsIndex = (rainbowColorsIndex + 1) % rainbowColors.length;
  rainbowColorsIndex++
  

  rainbowColorsIndex = rainbowColorsIndex % rainbowColors.length;
  console.log(rainbowColorsIndex);
}, 750);



// setInterval(function () {
//   console.log("something");
// }, 1000);


//  for (const color of rainbowColors) {
//  setInterval (function changeColors () {
  
//   rainbowChange.style.color = rainbowColors[currentIndex];

//  }, 500);
// };













console.log("end logic")






// if (storedClass === "dark-mode") {
//   dayNightClass.classList.remove("dark-mode")
//   console.log()
// }
// else {
//   dayNightClass.classList.add("dark-mode")
// }


 


// document.body.classList.add("dark-mode");





//   dayNightClass.classList.toggle("dark-mode");
//  console.log(`body class after toggle ${dayNightClass.classList}`)

//  if (dayNightClass.className === "dark-mode") {
//   localStorage.setItem('mode', "dark-mode")
// }

// else {
//   localStorage.setItem('mode', "day-mode")
// }
  // // else {
  // //   dayNightClass = document.body.classList.add("dark-mode");
  // // }
  // else if (dayNightClass.className !== "dark-mode") {
  //   dayNightClass = document.body.classList.add("dark-mode");
  // }

  // else {}
  // else {
  //   dayNightClass = document.body.classList.add("dark-mode");
  // }

// })

// console.log(dayNightBtn);
// console.log(dayNightTitle);

// dayNightBtn.addEventListener("click", function () {
//   console.log("clicked");
// })