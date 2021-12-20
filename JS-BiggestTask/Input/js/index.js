let inptName = document.querySelector(".form-name")
let inptSurname = document.querySelector(".form-surname")
let inptSalary = document.querySelector(".form-salary")
let table = document.querySelector(".table")
let saveBtn = document.querySelector(".saveBtn")
let uploadFile = document.querySelector(".t-head i")
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let popupImg = document.querySelector(".popup-img")
uploadFile.addEventListener("click", function () {
    this.nextElementSibling.click();
  })
uploadFile.nextElementSibling.addEventListener("change", function(e) {
    const {files} = e.target;
    for (let file of files) {
        const fileReader = new FileReader();
        fileReader.onloadend=function(e){
            const {result}= e.target;
            table.lastElementChild.innerHTML += `
                <tr>
                <td><span>${inptName.value}</span></td>
                <td><span>${inptSurname.value}</span></td>
                <td><span>${inptSalary.value}</span></td>
                <th><img class= "table-img"style="height: 100px; width: 100px;" src="${result}" alt=""></th>
                </tr>`
                let spans = document.querySelectorAll("span")
                spans.forEach((span) => {
                    span.addEventListener("click", () =>{
                        let input = document.createElement("input")
                        input.value = span.innerText;
                        span.parentElement.append(input)
                        span.style.display = "none"
                        input.addEventListener("blur", () =>{
                            span.innerText = input.value;
                            input.remove();
                            span.style.display = "flex"
                        })
                    })

                })
                let images = document.querySelectorAll(".table-img")
                
                images.forEach((image) => {
                    image.addEventListener("click", function (e) {
                      e.preventDefault();
                      doOpen();
                      changableImage(this);
                      this.classList.add("showSlide");
                    });
                });
        }
        fileReader.readAsDataURL(file)
    }
})
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
function doOpen() {
    popup.style.display = "flex";
  }

  function doClose() {
    popup.style.display = "none";
}
function changableImage(item) {
    let imgSrc = item.getAttribute("src"); 
    popupImg.setAttribute("src", imgSrc);
}