const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () =>{
document.body.classList.toggle('light');
btnSwitch.classList.toggle('active');
}) 