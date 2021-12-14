const parent = document.querySelector(".btns")
const red = document.querySelector(".red")
const blue = document.querySelector(".blue")
const green = document.querySelector(".green")
const yellow = document.querySelector(".yellow")
const box = document.querySelectorAll(".box")

red.addEventListener('click' , function() {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        element.classList.remove("yellow","blue","green");
    }
    box[0].classList.toggle("red")
});
blue.addEventListener('click' , function() {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        element.classList.remove("red","yellow","green");
    }
    box[1].classList.toggle("blue")
});
green.addEventListener('click' , function() {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        element.classList.remove("red","blue","yellow");
    }
    box[2].classList.toggle("green")
});
yellow.addEventListener('click' , function() {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        element.classList.remove("red","blue","green");
    }
    box[3].classList.toggle("yellow")
});