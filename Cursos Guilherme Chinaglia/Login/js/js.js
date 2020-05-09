var btnSignuin = document.querySelector('#signin');
var btnSignuup = document.querySelector('#signup');
var body = document.querySelector('body');

btnSignuin.addEventListener('click', function () {
    body.className = "sign-in-js";
});

btnSignuup.addEventListener('click', function () {
    body.className = "sign-up-js";
});