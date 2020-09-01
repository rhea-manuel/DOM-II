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
        event.preventDefault()
    })

    item.addEventListener("mouseleave", function(event){
        item.style.color="#213248"
        event.preventDefault()
    })

    item.addEventListener("click", function(){
        event.preventDefault()
    })

    // 2nd type: CSS Transition Event
    item.addEventListener("transitionend", function(event){
        item.style.color="#ca8c81"
        event.preventDefault()
    })
})

// ------------------
// Next modify the main image
// ------------------
const heroImage = document.querySelector(".intro img")

// 3nd type: Screen Event
document.addEventListener("scroll", function(){
    // gsap.to(".intro img", {duration: 2, width:0, height:0});
    heroImage.src="https://source.unsplash.com/random/1000x300"
    // gsap.to(".intro img", {duration: 2, x:100})
    gsap.fromTo(".intro img", {opacity:.5, ease:"inout", duration:.25}, {opacity:1,duration: .25,});
})

// 4rd type: Pointer Event
heroImage.addEventListener("pointerenter", function(){
    heroImage.src="https://picsum.photos/1000/300"
    gsap.fromTo(".intro img", {opacity:.5, ease:"inout", duration:.25}, {opacity:1,duration: .25,});
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
    gsap.fromTo(".main-navigation", {scale:.8, duration:.5},{scale:1,duration:.5})
})

// mainHeading.addEventListener("fullscreenchange", function(){
//     mainHeading.textContent = "I'm the loaded Fun Bus!"
// })

// 8th type: Drag & Drop events
const firstContent = document.querySelector(".img-content")
const firstContentImg = firstContent.querySelector("img")
firstContentImg.addEventListener("drag", function(){
    mainHeading.textContent = "You're a drag!"
    gsap.to(".img-content", {duration: 2, rotation: 360,});
})

// 9th type: Tab Event
const welcomeMsg = document.querySelector("h2")
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    welcomeMsg.textContent="Welcome back to Fun Bus!"
  } else {
    welcomeMsg.textContent="You're away :("
    gsap.from(".intro h2", {duration: 2, x: 200, ease: "bounce"});
    // gsap.from(".intro h2", {duration: 2, rotation: 360,});
  }
});

// 10th type: Double Click + Stop propagation correctly
welcomeMsg.addEventListener("dblclick", function(){
    this.style.backgroundColor="#eed6a7"
    gsap.from(".intro h2", {duration: 2, x: 200, ease: "bounce"});
    // Stops the header from also changing background color
    event.stopPropagation() 
})

const intro = document.querySelector(".intro")
intro.addEventListener("dblclick", function(){
    this.style.backgroundColor="#aaa9a0"
})

// navigator.getBattery().then(function(battery) {
//     let textToAdd = battery.charging ? "You're charging your battery!" : "You're not charging your battery"
//     welcomeMsg.textContent=`Welcome to Fun Bus! ${textToAdd}`

//   battery.addEventListener('chargingchange', function() {
//     textToAdd = battery.charging ? "You're charging your battery!" : "You're not charging your battery"
//     welcomeMsg.textContent=`Welcome to Fun Bus! ${textToAdd}`
//   });

// });

// console.log(firstContent)
// 8th type: Focus Event


