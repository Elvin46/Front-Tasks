const btn = document.querySelector("button")
const collapse = document.querySelector(".navbar-collapse")
btn.addEventListener('click' , function() {
    collapse.classList.toggle("visible")
});