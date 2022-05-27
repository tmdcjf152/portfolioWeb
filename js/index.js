const btnCall = document.querySelector(".btnCall");
const menu = document.querySelector(".menu");

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on");
    menu.classList.toggle("on");
}