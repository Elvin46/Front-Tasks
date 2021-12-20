let saveBtn = document.querySelector(".saveBtn")
let loginSec = document.querySelector("#log-in")
let picturesSec = document.querySelector("#pictures")
let images = document.querySelectorAll(".gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");
let uploadFile = document.querySelector(".gallery i")
let gallery = document.querySelector(".gallery")
uploadFile.addEventListener("click", function () {
    this.nextElementSibling.click();
  })

  uploadFile.nextElementSibling.addEventListener("change", function(e) {
      const {files} = e.target;
      for (let file of files) {
         const fileReader = new FileReader();
         fileReader.onloadend=function(e) {
             const {result}= e.target;
             gallery.append("img")

         } 
         fileReader.readAsDataURL(file) 
      }
      
  })
  
// --------EVENTS--------
images.forEach((image) => {
    image.addEventListener("click", function (e) {
      e.preventDefault();
      doOpen();
      changableImage(this);
      this.classList.add("showSlide");
  
    });
});

// close--------
closeIcon.addEventListener("click", function () {
    doClose();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    doClose();
  }
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});
// -------------

nextBtn.addEventListener("click", function () {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" && popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    nextElemSib(showSlide);
  }
});
  
prevBtn.addEventListener("click", function () {
    let showSlide = document.querySelector(".showSlide");
    prevElemSib(showSlide);
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft" && popup.style.display === "flex") {
    let showSlide = document.querySelector(".showSlide");
    prevElemSib(showSlide);
  }
});

saveBtn.addEventListener("click" , () => {
  loginSec.style.display = "none";
  setTimeout(()=>{picturesSec.style.display = "flex";}, 1000)
  welcome()
})
document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    
    welcome()
  }
});

// ----------------------------------------------------

// --------FUNCTIONS--------
function doOpen() {
    popup.style.display = "flex";
  }
  
function doClose() {
    popup.style.display = "none";
}
function changableImage(item) {
    let imgSrc = item.getAttribute("href");
    biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
    //   let showSlide = document.querySelector("");
  
    if (item.nextElementSibling !== null) {
      item.nextElementSibling.classList.add("showSlide");
      changableImage(item.nextElementSibling);
    } else {
      item.parentElement.children[0].classList.add("showSlide");
      changableImage(item.parentElement.children[0]);
    }
  
    item.classList.remove("showSlide");
}
  
function prevElemSib(item) {
    //   let showSlide = document.querySelector("");
    let length = item.parentElement.children.length;
  
    console.log(length);
    if (item.previousElementSibling !== null) {
      item.previousElementSibling.classList.add("showSlide");
      changableImage(item.previousElementSibling);
    } else {
      item.parentElement.children[length - 1].classList.add("showSlide");
      changableImage(item.parentElement.children[length - 1]);
    }
    item.classList.remove("showSlide");
}

function welcome() {
  let h1 = document.createElement("h1")
  let inputValue = document.querySelector("#inputLabel").value
  let t = document.createTextNode("Welcome " + inputValue + "!")
  loginSec.style.display = "none";
  setTimeout(()=>{picturesSec.style.display = "flex";}, 1000)
  h1.appendChild(t)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector(".welcome").appendChild(h1);
    console.log(h1);
  }
  document.getElementById("inputLabel").value = "";
}