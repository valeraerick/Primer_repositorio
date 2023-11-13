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

// boton Scroll Top
const btn_scrollTop = document.getElementById("btn_scrollTop")
    btn_scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })

    })

window.onscroll = ()=> {
    if (window.scrollY < 300){
        btn_scrollTop.classList.remove("btn_scrollOn") 
    } else {
        btn_scrollTop.classList.add("btn_scrollOn")
    }
}

