const firstNameInput = document.querySelector('.js-first-name');

const lastNameInput = document.querySelector('.js-last-name');

const emailInput = document.querySelector('.js-email');

const passwordInput = document.querySelector('.js-password');

const buttonElement = document.querySelector('.js-submit-button');

//first name error
const firstNameError = document.querySelector('.js-error-text-first-name');

const firstNameErrorSign = document.querySelector('.js-error-sign-first-name');


//last name error
const lastNameError = document.querySelector('.js-error-text-last-name');

const lastNameErrorSign = document.querySelector('.js-error-sign-last-name');


//email error
const emailError = document.querySelector('.js-error-text-email');

const emailErrorSign = document.querySelector('.js-error-sign-email');


//password error
const passwordError = document.querySelector('.js-error-text-password');

const passwordErrorSign = document.querySelector('.js-error-sign-password');

//when submit is clicked
buttonElement.addEventListener('click', () => {
  //first name
  if (firstNameInput.value === '') {
    invalidFirstName();
    firstNameError.innerHTML = `First name cannot be empty`;
    
  } else if (firstNameInput.value % 1 === 0) {
    invalidFirstName();
    firstNameError.innerHTML = `Include letters please`;
    
  } else if (!firstNameInput.value % 1 === 0) {
    validFirstName();
  }


  //last name
  if(lastNameInput.value === '') {
    invalidLastName();
    lastNameError.innerHTML = `Last name cannot be empty`;

  } else if (lastNameInput.value % 1 === 0) {
    invalidLastName();
    lastNameError.innerHTML = `Include letters please`;

  } else if (!lastNameInput.value % 1 === 0) {
    validLastName();
  }


  //email
  if (emailInput.value === '') {
    invalidEmail();

  } else if (!emailInput.value.includes('@')) {
    invalidEmail();

  } else if (!emailInput.value.includes('.')) {
    invalidEmail();

  } else {
    validEmail();
  }



  //password
  if (passwordInput.value === '') {
    invalidPassword();
    passwordError.innerHTML = `Password cannot be empty`;

  } else if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
    invalidPassword();
    passwordError.innerHTML = `Password too short`;

  } else {
    validPassword();
  }
});



//first name functions
function invalidFirstName() {
  firstNameInput.classList.remove('green-border');
  firstNameInput.classList.add('red-border');
  firstNameErrorSign.classList.add('error-sign');
  firstNameErrorSign.innerHTML = '!';
}

function validFirstName() {
  firstNameInput.classList.remove('red-border');
  firstNameInput.classList.add('green-border');
  firstNameErrorSign.classList.remove('error-sign');
  firstNameErrorSign.innerHTML = '';
  firstNameError.innerHTML = '';
}



//last name functions
function invalidLastName() {
  lastNameInput.classList.remove('green-border');
  lastNameInput.classList.add('red-border');
  lastNameErrorSign.classList.add('error-sign');
  lastNameErrorSign.innerHTML = '!';
}

function validLastName() {
  lastNameInput.classList.remove('red-border');
  lastNameInput.classList.add('green-border');
  lastNameErrorSign.classList.remove('error-sign');
  lastNameErrorSign.innerHTML = '';
  lastNameError.innerHTML = '';
}


//email functions
function invalidEmail() {
  emailInput.classList.remove('green-border');
  emailInput.classList.add('red-border');
  emailErrorSign.classList.add('error-sign');
  emailErrorSign.innerHTML = '!';
  emailError.innerHTML = `Looks like this is not an email`;
  emailInput.placeholder = `email@example.com`;
}

function validEmail() {
  emailInput.classList.remove('red-border');
  emailInput.classList.add('green-border');
  emailErrorSign.classList.remove('error-sign');
  emailErrorSign.innerHTML = '';
  emailError.innerHTML = '';
  emailInput.placeholder = `email@example.com`;
}


//password functions
function invalidPassword() {
  passwordInput.classList.remove('green-border');
  passwordInput.classList.add('red-border');
  passwordErrorSign.classList.add('error-sign');
  passwordErrorSign.innerHTML = '!';
}

function validPassword() {
  passwordInput.classList.remove('red-border');
  passwordInput.classList.add('green-border');
  passwordErrorSign.classList.remove('error-sign');
  passwordErrorSign.innerHTML = '';
  passwordError.innerHTML = ``;
}