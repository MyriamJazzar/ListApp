let input = document.querySelector("input")
let span = document.querySelector("span")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
input.addEventListener("keyup", AddTextToButton)


//#### Adding the input content to the button ###//
function AddTextToButton()
{
    if(input.value != "")
    span.innerHTML = input.value

}

//### Triggering a Button Click on Enter####//
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
     e.preventDefault();
     button.click();
 }
});

//### Actions after clicking on button ###//
button.addEventListener("click", ActionsAfterButton)
function ActionsAfterButton(){
    if(input.value == "")
    alert("Please fill the input field");
    else
    {
        let li = document.createElement("li")
        li.innerHTML = input.value
        ul.appendChild(li)
        input.value=""
        p.innerHTML=""
    }
}
