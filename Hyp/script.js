const cross = document.getElementById("cross");
const menubar = document.getElementById("menubar");
const logo = document.getElementById("logo");
const nav = document.getElementById("nav")
const header = document.getElementById("header");
const body = document.getElementById("body");
const main = document.getElementById("mainm");


menubar.addEventListener("click", () => {
    menubar.style.rotate = "90deg"
    nav.style.left = "0";
    cross.style.rotate = "180deg"
});

cross.addEventListener("click", () => {
    menubar.style.rotate = "0deg"
    cross.style.rotate = "90deg"
    nav.style.left = "-50%";
    
});

window.addEventListener("scroll", () =>{
    if(window.scrollY>100){
        logo.style.filter = "invert()"
        header.style.transition = "all ease .5s";
        header.style.backgroundColor = "white";
        menubar.style.color = "black"
        
    }

    else if(window.scrollY>150){
        nav.style.opacity = "0%"
    }

   

    else{
        // header.style.transition = "all ease 0.5s";
        header.style.backgroundColor = "";
        logo.style.transition = "all ease .5s";
        logo.style.filter = "none"
        menubar.style.color = ""
    }
})













