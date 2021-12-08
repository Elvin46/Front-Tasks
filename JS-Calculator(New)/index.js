let display = document.querySelector(".display");
let buttons = document.querySelectorAll(".button")

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch(btn.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += btn.innerText;
        }
    })
});