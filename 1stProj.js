const burger = document.body.querySelector(".burger");
const secBurger = document.body.querySelector("header nav .burger>span:nth-child(2)");
const links = document.body.querySelector("header nav .links")
burger.addEventListener("click",()=>{
    console.log("hello");
    if (secBurger.style.width === "100%") {
        secBurger.style.width= "60%";
        links.style.display = "none"
    } else {
        secBurger.style.width= "100%";
        links.style.display = "block"
    }
})