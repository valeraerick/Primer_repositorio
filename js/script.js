// <--boton modo claro/oscuro-->

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
document.body.classList.toggle('light');
btnSwitch.classList.toggle('active');
}) 

// <-- validar fomulario -->
function validarFormulario() {

    let nombreApellido = document.getElementById("nombreApellido").value;
    let email = document.getElementById("email").value;
    let whatsapp = document.getElementById("whatsapp").value;

    if (nombreApellido === "" || email === "" || whatsapp === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    document.getElementById("popup").style.display = "block";

    nombreApellido.value = "";
    email.value = "";
    whatsapp.value = "";
   
    return false;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
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

