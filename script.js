
let switcher = document.querySelectorAll(".switcher li")
let boxing = Array.from(document.querySelectorAll(".box")) 


switcher.forEach((li) => {
    li.addEventListener("click", toggle )
    li.addEventListener("click", mangeImges )
})

function toggle() {
    switcher.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
}
function mangeImges() {
    boxing.forEach((box) => {
        box.style.display = "none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block"
    })
    
}
