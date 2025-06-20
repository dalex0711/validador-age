
//Obteniendo valores del DOM
const containerHero = document.querySelector('#container-hero');
const containerForm = document.querySelector('#container-request');
const containerAdult = document.querySelector('#container-end');
const containerUnderAge = document.querySelector('#container-UnderAge');

const nameInput = document.getElementById('name-input');
const ageInput = document.getElementById('age-input');

const form = document.querySelector('.formField');

let contenidoH2 = document.getElementById('content-h2')
let contenidoP = document.getElementById('content-p')
let contenidoH3 = document.getElementById('content-h3')

let refresh = document.getElementById('button-refresh');



// Muestra el formulario al hacer clic en el botón inicial
document.getElementById('button-hero').addEventListener('click', function() {
   containerHero.style.display = 'none';
   containerForm.style.display = 'block';
   
});

// Manejo del envío del formulario

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    getInputValues();
}); 

// Función principal que gestiona los datos del formulario
function getInputValues() {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if(isNaN(age)){
      alert('You must enter only numbers')

    }else if (age==""|| name=="" ){
      alert('You must fill in all fields')

    }else if (age > 18) {
      adult(name,age)
    
    }else if (age < 18){
      adult(name,age)
       adult(name,age)
      contenidoH3.innerText  = "You are a minor"
      contenidoP.innerText = `¡It's great that you're already learning! You have a long way to go to grow, experiment, and improve every day.
                              Keep going; it's never too early to start building your future. `;
    }else{
     alert('An error has occurred')

    }
  
}

// Muestra el mensaje general y oculta las demás vistas
function adult(name, age){
    contenidoH2.innerText = `Helli ${name}. You are ${age} years old`;
    containerHero.style.display = 'none';
    containerForm.style.display = 'none';
    containerAdult.style.display = 'block';

}

// Recarga la página al hacer clic en el botón de reinicio
document.getElementById('button-refresh').addEventListener('click', function() {
    location.reload();
});
