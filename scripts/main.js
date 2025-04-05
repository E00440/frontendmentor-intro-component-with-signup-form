const firstNameInput = document.querySelector('.js-first-name');

const lastNameInput = document.querySelector('.js-last-name');

const emailInput = document.querySelector('.js-email');

const passwordInput = document.querySelector('.js-password');

const buttonElement = document.querySelector('.js-submit-button');

//first name error
const firstNameError = document.querySelector('.js-error-text-first-name');

//last name error
const lastNameError = document.querySelector('.js-error-text-last-name');

//email error
const emailError = document.querySelector('.js-error-text-email');

//password error
const passwordError = document.querySelector('.js-error-text-password');

//when submit is clicked
buttonElement.addEventListener('click', () => {
  //first name
  if (firstNameInput.value === '') {
    firstNameInput.classList.remove('green-border');
    firstNameInput.classList.add('red-border');
    firstNameError.innerHTML = `First name cannot be empty`;
    
  } else if (firstNameInput.value % 1 === 0) {
    firstNameInput.classList.remove('green-border');
    firstNameInput.classList.add('red-border');
    firstNameError.innerHTML = `Include letters please`;
    
  } else if (!firstNameInput.value % 1 === 0) {
    firstNameInput.classList.remove('red-border');
    firstNameInput.classList.add('green-border');
    firstNameError.innerHTML = '';
  }


  //last name
  if(lastNameInput.value === '') {
    lastNameInput.classList.remove('green-border');
    lastNameInput.classList.add('red-border');
    lastNameError.innerHTML = `Last name cannot be empty`;

  } else if (lastNameInput.value % 1 === 0) {
    lastNameInput.classList.remove('green-border');
    lastNameInput.classList.add('red-border');
    lastNameError.innerHTML = `Include letters please`;

  } else if (!lastNameInput.value % 1 === 0) {
    lastNameInput.classList.remove('red-border');
    lastNameInput.classList.add('green-border');
    lastNameError.innerHTML = '';
  }


  //email
  if (emailInput.value === '') {
    invalidEmail();

  } else if (!emailInput.value.includes('@')) {
    invalidEmail();

  } else if (!emailInput.value.includes('.')) {
    invalidEmail();

  } else {
    emailInput.classList.remove('red-border');
    emailInput.classList.add('green-border');
    emailError.innerHTML = '';
  }



  //password
  if (passwordInput.value === '') {
    passwordInput.classList.remove('green-border');
    passwordInput.classList.add('red-border');
    passwordError.innerHTML = `Password cannot be empty`;

  } else if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
    passwordInput.classList.remove('green-border');
    passwordInput.classList.add('red-border');
    passwordError.innerHTML = `Password too short`;

  } else {
    passwordInput.classList.remove('red-border');
    passwordInput.classList.add('green-border');
    passwordError.innerHTML = ``;
  }
});


function invalidEmail() {
  emailInput.classList.remove('green-border');
  emailInput.classList.add('red-border');
  emailError.innerHTML = `Looks like this is not an email`;
}