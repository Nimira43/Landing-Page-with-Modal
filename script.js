const formContainer = document.querySelector('.form-container')
const signupModal = document.querySelector('.signup-form-wrapper')
const loginModal = document.querySelector('.login-form-wrapper')
const signupBtn = document.querySelector('.signup-btn')
const loginBtn = document.querySelector('.login-btn')
const signupX = document.querySelector('.signup-x')
const loginX = document.querySelector('.login-x')

signupBtn.addEventListener('click', () => {
    signupModal.classList.add('display')
    formContainer.classList.add('disable')
})
signupX.addEventListener('click', () => {
    signupModal.classList.remove('display')
    formContainer.classList.remove('disable')
})


loginBtn.addEventListener('click', () => {
    loginModal.classList.add('display')
    formContainer.classList.add('disable')
})
loginX.addEventListener('click', () => {
    loginModal.classList.remove('display')
    formContainer.classList.remove('disable')
})