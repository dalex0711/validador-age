
//Obteniedndo valores y declarando
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


document.getElementById('button-hero').addEventListener('click', function() {
   containerHero.style.display = 'none';
   containerForm.style.display = 'block';
   
});


form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    getInputValues();
}); 


function getInputValues() {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if(isNaN(age)){
      alert('Debes ingresar solo números')

    }else if (age==""|| name=="" ){
      alert('Debes llenar todos los campos')

    }else if (age > 18) {
      adult(name,age)
    
    }else if (age < 18){
      adult(name,age)
       adult(name,age)
      contenidoH3.innerText  = "Eres menor de edad"
      contenidoP.innerText = `¡Qué bien que ya estás aprendiendo desde ahora! Tienes todo un camino por delante para crecer, experimentar y mejorar cada día.
                                Sigue así, nunca es muy pronto para empezar a construir tu futuro. `;
    }else{
     alert('Ha ocurrido un error')

    }
  
}

function adult(name, age){
    contenidoH2.innerText = `Hola ${name}. Tienes ${age} de edad`;
    containerHero.style.display = 'none';
    containerForm.style.display = 'none';
    containerAdult.style.display = 'block';

}



document.getElementById('button-refresh').addEventListener('click', function() {
    location.reload();
});
