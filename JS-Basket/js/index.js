// ---------------------LOGIN----------------------
let username = document.querySelector("#username");
let pass = document.querySelector("#pass");
let btn = document.querySelector(".login");
let welcome = document.querySelector(".div");
let welcomeH = document.querySelector(".div h1");
let form = document.querySelector("#login");
let logout = document.querySelector(".logout");
let invalid = document.querySelector(".invalid")
let localUser = JSON.parse(localStorage.getItem("login"));
let guest = document.querySelector(".guest")
const user = {
  username: "MM",
  pass: "12",
};

if (localUser !== null) {
  welcome.style.display = "block";
  form.style.display = "none";
} else {
  welcome.style.display = "none";
  form.style.display = "flex";
}
let userName;
let passW;

username.addEventListener("change", function (e) {
  const { value: userVal } = e.target;
  userName = userVal;
});
pass.addEventListener("change", function (e) {
  const { value: userPass } = e.target;
  passW = userPass;
});

btn.addEventListener("click", function (e) {
  const { username: myName, pass: userPassword } = user;
  if (userName === myName && passW === userPassword) {
    localStorage.setItem("login", JSON.stringify(user));
    location.reload();
  }
  invalid.style.display = "block"
});
guest.addEventListener("click", function (e) {
    welcome.style.display = "block";
    form.style.display = "none";
})

document.addEventListener("keyup", function (e) {
    const { username: myName, pass: userPassword } = user;
    if (e.code==="Enter") {
        if (userName === myName && passW === userPassword) {
            localStorage.setItem("login", JSON.stringify(user));
            location.reload();
          }
          invalid.style.display = "block"
    }
  });

logout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("login");
  location.reload();
});

// -----------------ADD TO CART-------------------
let addBtns = document.querySelectorAll(".add-to-cart")
let cartBtn = document.querySelector(".product-head .basket-icon")
let cartSection = document.querySelector(".cart")
let total = document.querySelector(".total")

cartBtn.addEventListener("click", function(){
    cartSection.style.display = "Block"
    document.querySelector(".card-deck").style.display = "none"
    this.style.display = "none"
})

addBtns.forEach(addBtn => {
    addBtn.addEventListener("click", function(){
        let ID = this.parentElement.parentElement.getAttribute("data-id")
        let NAME = this.parentElement.previousElementSibling.children[0].innerHTML
        let PRICE = this.previousElementSibling.innerHTML
        
        if (localStorage.getItem("basket")==null) {
          localStorage.setItem("basket",JSON.stringify([]))
        }
      
        let basket=JSON.parse(localStorage.getItem("basket"))
        let isExsistProduct=basket.find(x=>x.id==ID)
      if (isExsistProduct==undefined) {
          let Product={
              id:ID,
              name:NAME,
              price:PRICE,
              count:1
              }
              basket.push(Product)
      }
      else{ 
        isExsistProduct.count+=1
      }
      localStorage.setItem("basket",JSON.stringify(basket))
      counter();
    })
})
if (localStorage.getItem("basket")!==null) {
  counter();
}


function counter(){
   let span=document.querySelector("span")
   let basket=JSON.parse(localStorage.getItem("basket"))
   span.innerText=basket.length
}
let table=document.querySelector(".cart-table")
let products=JSON.parse(localStorage.getItem("basket"))
products.forEach(product=>{
    table.innerHTML+=` 
    <td>#${product.id}</td>
    <td>${product.name}</td>
    <td>${product.count}</td>
    <td>${product.price}</td>`
})