window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){
header.style.background="#082b45";
}else{
header.style.background="#0a3d62";
}

});
