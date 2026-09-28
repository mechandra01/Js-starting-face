let bulb = document.querySelector("#bulb");
let btn = document.querySelector("button");
let on = 0;

btn.addEventListener("click", function() {
    if(on == 0) {
        bulb.style.backgroundColor = "white";
        btn.innerHTML = "On";

        on = 1;
    } else {
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "Off";

        on = 0;
    }
})