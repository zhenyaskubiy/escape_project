let name = document.querySelector('#name-field')
let email = document.querySelector('#email-field')
let password = document.querySelector('#password-field')
let submit = document.querySelector('.submit-button')

let users = {}

function User(name, email, password){
    this.name = name
    this.email = email
    this.password = password
}
function createId(users){
    return Object.keys(users).length
}

function validateName(name){
    const nameRegex = /^[A-Za-zА-Яа-яЄєІіЇїҐґ\s]+$/
    return name.length <=35 && nameRegex.test(name)
}

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9.]+@[a-z]+\.[a-z]{2,}$/
    return emailRegex.test(email)
}

function validatePassword(password){
    return password.length >= 8 && password.length <= 25
}

function validateEmptyFields() {
    if (!name.value.trim() || !email.value.trim() || !password.value.trim()) {
        alert('Будь ласка, заповніть всі поля!');
        return false;
    }
    return true;
}

submit.addEventListener('click', () => {
    const nameUser = name.value
    const emailUser = email.value
    const passwordUser = password.value

    const user = new User(nameUser, emailUser, passwordUser)

    const userId = 'User' + createId(users)
    users[userId] = user

    console.log(users)
    

    if (!validateEmptyFields()) {
        return
    }

    if (!validateName(nameUser)) {
        alert('Ім\'я має бути не більше 35 символів та не містити цифри.');
        return
    }

    if(!validateEmail(emailUser)){
        alert('Електронна пошта має бути у правильному форматі, наприклад: user@example.com')
        return
    }

    if(!validatePassword(passwordUser)){
        alert('Пароль має бути від 8 до 25 символів.')
        return
    }

    alert(`${nameUser}, Ви успішно зареєструвалися!`)
})