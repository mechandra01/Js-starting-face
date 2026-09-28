let btn = document.querySelector("button");
let h3 = document.querySelector("h3");

let none = 0;

btn.addEventListener("click", function() {
    if(none == 0) {
        h3.innerHTML = "Friends";
        h3.style.color = "green";
        btn.style.backgroundColor = "red";
        btn.innerHTML = "Remove Friends";
        none = 1;
    } else {
        h3.innerHTML = "Stranger";
        h3.style.color = "red";
        btn.style.backgroundColor = "green";
        btn.innerHTML = "Add Friends";
        none = 0;
    }
})