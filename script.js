let form = document.getElementById('form');
let successPage = document.querySelector('.cont');
let nameInput = document.getElementById('name');
let numberInput = document.getElementById('number');
let monthInput = document.getElementById('month');
let yearInput = document.getElementById('year');
let cvcInput = document.getElementById('cvc');
let nameError = document.getElementById('nameError');
let numberError = document.getElementById('numberError');
let dateError = document.getElementById('dateError');
let cvcError = document.getElementById('cvcError');
let numberPlaceholder = document.querySelector('.number-placeholder');
let namePlaceholder = document.querySelector('.name-placeholder');
let monthPlaceholder = document.getElementById('monthPlaceholder');
let yearPlaceholder = document.getElementById('yearPlaceholder');
let cvcPlaceholder = document.querySelector('.cvc-placeholder');
let continueClick = document.querySelector('.continue');

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateForm();
})

continueClick.addEventListener('click', function(){
    location.reload();
})

const validateForm = () => {
    let nameValue = nameInput.value.trim();
    let numberValue = numberInput.value.trim();
    let monthValue = monthInput.value.trim();
    let yearValue = yearInput.value.trim();
    let cvcValue = cvcInput.value.trim();

    // let nameRegex = /^([A-Z]{1}[a-z]) ([A-Z]{1}[a-z])$/
    let numberRegex = /^([\d]{4}) ([\d]{4}) ([\d]{4}) ([\d]{4})$/
    let expRegex = /^([\d]{2})$/
    let cvcRegex = /^([\d]{3})$/

    if (nameValue === '' || nameValue == null){
        nameError.innerHTML = "This field is required"
    // }else if (!(nameRegex).test(nameValue)){
    //     nameError.innerHTML = "Please enter name in the valid format"
    }

    if (numberValue === '' || numberValue == null){
        numberError.innerHTML = "This field is required"
    }else if (!(numberRegex).test(numberValue)){
        numberError.innerHTML = "Please enter card number in the valid format"
    }

    if (monthValue === '' || yearValue === ''){
        dateError.innerHTML = "This field is required"
    }else if (!(expRegex).test(monthValue) || !(expRegex).test(yearValue)){
        dateError.innerHTML = "Please enter card expiration date in the valid format"
    }

    if (cvcValue === '' || cvcValue == null){
        cvcError.innerHTML = "This field is required"
    }else if (!(cvcRegex).test(cvcValue)){
        cvcError.innerHTML = "Please enter cvc number in the valid format"
    }

    if (nameError.innerHTML === '' && numberError.innerHTML === '' && dateError.innerHTML === '' && cvcError.innerHTML === ''){
        numberPlaceholder.textContent = numberValue
        namePlaceholder.textContent = nameValue
        monthPlaceholder.textContent = monthValue
        yearPlaceholder.textContent = yearValue
        cvcPlaceholder.textContent = cvcValue

        form.style.display = "none"
        successPage.style.display = "flex"
    }
}