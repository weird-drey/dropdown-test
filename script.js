let connect = document.getElementById("div");
let paragraph = document.getElementById("paragraph");
let disconnect = document.getElementById("div1");
let clicked = false;

connect.addEventListener("click", () => {
    paragraph.classList.remove("hide")
    connect.classList.add("hide")
    disconnect.classList.remove("hide")
});

disconnect.addEventListener("click", () => {
    paragraph.classList.remove("hide")
    connect.classList.remove("hide")
    disconnect.classList.add("hide")
})

