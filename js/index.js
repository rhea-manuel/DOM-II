// Your code goes here

// ------------------
// First modifying the nav links
// ------------------
const allNavLinks = document.querySelectorAll(".nav-link")
// allNavLinks.forEach(
//     item=>item.addEventListener('mouseover', function(event){
//     item.style.color="green"
// }
// item.addEventListener('mouseleave', function(event){
    
// })
// ))

allNavLinks.forEach(function(item){
    // 1st type: Mouse Events
    item.addEventListener("mouseover", function(event){
        item.style.color="#17a2b8"
        item.style.transition=".25s"
    })

    item.addEventListener("mouseleave", function(event){
        item.style.color="#213248"
    })

    // 2nd type: CSS Transition Event
    item.addEventListener("transitionend", function(event){
        item.style.color="#ca8c81"
    })
})

// ------------------
// Next modify the main image
// ------------------
const heroImage = document.querySelector(".intro img")

// 3nd type: Screen Event
document.addEventListener("scroll", function(){
    heroImage.src="https://source.unsplash.com/random/1000x300"
})

// 4rd type: Pointer Event
heroImage.addEventListener("pointerenter", function(){
    heroImage.src="https://picsum.photos/1000/300"
})

// ------------------
// Text on the page
// ------------------

const allParagraphs = document.querySelectorAll(".container.home p")

// 5rd type: Clipboard Event
console.log(allParagraphs)
allParagraphs.forEach(function(item){
    item.addEventListener("copy", function(event){
        item.innerText = "You copied me! Oh no, where did I go?!"
    })
})

// 6th type: Resource Event
const mainHeading = document.querySelector(".logo-heading")
console.log(mainHeading)
window.addEventListener("beforeprint", function(){
    mainHeading.textContent = "Printing Fun Bus!"
})

// 7th type: Keyboard Event
const nav = document.querySelector(".main-navigation")
document.addEventListener("keydown", function(event){
    if (event.key==="y"){
        nav.style.backgroundColor="#eed6a7"
    }
})

// mainHeading.addEventListener("fullscreenchange", function(){
//     mainHeading.textContent = "I'm the loaded Fun Bus!"
// })

// 8th type: Drag & Drop events
const firstContent = document.querySelector(".img-content")
const firstContentImg = firstContent.querySelector("img")
firstContentImg.addEventListener("drag", function(){
    mainHeading.textContent = "You're a drag!"
})

const welcomeMsg = document.querySelector("h2")
// 9th type: Tab Event
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    welcomeMsg.textContent="Welcome back to Fun Bus!"
  } else {
    welcomeMsg.textContent="You're away :("
  }
});

// 10th type: Battery Event
navigator.getBattery().then(function(battery) {

    let textToAdd = battery.charging ? "You're charging your battery!" : "You're not charging your battery"
    welcomeMsg.textContent=`Welcome to Fun Bus! ${textToAdd}`
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));

  battery.addEventListener('chargingchange', function() {
    textToAdd = battery.charging ? "You're charging your battery!" : "You're not charging your battery"
    welcomeMsg.textContent=`Welcome to Fun Bus! ${textToAdd}`
    console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
  });

});

// console.log(firstContent)
// 8th type: Focus Event


