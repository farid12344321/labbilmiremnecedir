
let input = document.querySelector(".form-label")
let button10 = document.querySelector(".button10")
button10.addEventListener("click", function (e) {
    e.preventDefault();
    let order = getInputCount() + 1;
    let newinput = createInput(order);
    document.querySelector(".list-input").appendChild(newinput)
})
function createInput(order) {
    let input = document.createElement("input");
    input.style.width = "100%"
    input.setAttribute("type", "text");
    input.setAttribute("name", "input" + order);
    input.setAttribute("placeholder", "Fullname" + order);
    return input;
}
function getInputCount() {
    return document.querySelectorAll(".list-input input").length;
}






document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let spans = document.querySelectorAll("span")
    spans.forEach(elem=>elem.remove())


    let listul = document.querySelector(".list-ul");
    let inputsul =  document.querySelectorAll(".list-input input");
    let error1 = document.querySelector(".error")
    let isempty = false;

    inputsul.forEach(element => {
        if(element.value.trim() ===""){
            isempty = true
        }
    });
    if(isempty){
        let span = showError("Please fill in all input fields");
        error1.appendChild(span);
        return;
    }

    let h1 = document.querySelector("h1");
    h1.style.display = "block"
    listul.innerHTML = "";
    document.querySelectorAll(".list-input input").forEach((elem, index) => {
        listul.appendChild(createLl(elem,index))
    })
})



function showError(message){
    let span = document.createElement("span");
    span.innerText = message;
    span.style.color="red";
    span.style.border = "solid 2px black"
   
    setTimeout(function(){
        span.remove();
    },3000)

    return span;
}











function createLl(elem,index) {
    let li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.backgroundColor = "red";
    li.style.color = "white"
    li.textContent = (index+1)+". " +elem.value
    return li;
}



