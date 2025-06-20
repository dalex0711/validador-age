
//Getting values ​​from the DOM
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



// Display the form when the initial button is clicked
document.getElementById('button-hero').addEventListener('click', function() {
   containerHero.style.display = 'none';
   containerForm.style.display = 'block';
   
});

// Handling form submission

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    getInputValues();
}); 

// Main function that manages the form data
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

// Show the general message and hide the other views
function adult(name, age){
    contenidoH2.innerText = `Hello ${name}. You are ${age} years old`;
    containerHero.style.display = 'none';
    containerForm.style.display = 'none';
    containerAdult.style.display = 'block';

}

// Reload the page when the reset button is clicked
document.getElementById('button-refresh').addEventListener('click', function() {
    location.reload();
});
