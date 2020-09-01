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

    // ------------------
    // 1st type: Mouseover
    // ------------------
    item.addEventListener("mouseover", function(event){
        item.style.color="#17a2b8"
        item.style.transition=".25s"
    })

    // ------------------
    // 2nd type: Moveleave
    // ------------------
    item.addEventListener("mouseleave", function(event){
        item.style.color="#213248"
    })
})


