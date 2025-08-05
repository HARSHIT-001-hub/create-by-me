let btr = document.querySelector("#color");
let res = document.querySelector("#reset");
let body = document.querySelector("body");

let colors = ["blue", "red", "green", "yellow", "purple"];
let index = 0;

btr.addEventListener("click", () => {
    body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});

res.addEventListener("click",() =>{
    body.style.backgroundColor = "white";
    index = 0;
})
