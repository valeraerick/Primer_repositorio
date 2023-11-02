// <--boton modo claro/oscuro-->

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
document.body.classList.toggle('light');
btnSwitch.classList.toggle('active');
}) 

//  <--popup-->

let popup= document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}


