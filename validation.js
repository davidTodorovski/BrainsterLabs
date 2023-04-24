
const form = document.querySelector('.cta-form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const company = document.getElementById('company');





function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-container error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-container success';
}


function checkEmail (input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(re.test(input.value.trim())) {
         showSucces(input)

     } else {
         showError(input, 'Е-маилот е невалиден!');
     }
}




// function checkRequired(inputArr) {
//     inputArr.forEach(function(input) {
//         if (input.value.trim() === '') {
//             showError(input, `${getFieldName(input)} is required`);
//         } else {
//             showSucces(input);
//         }
//     });
// }

// function getFieldName(input) {
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }


// From Valiation
form.addEventListener('submit', function(e){
    e.preventDefault();

    // checkRequired([username, email, telephone, company]);
    checkEmail(email);

    if (username.value.trim() === "") {
        showError(username, "Ве молиме внесете го вашето Име и Презиме")
    } else {
        showSucces(username)
    }

    if (company.value.trim() === "") {
        showError(company, "Потребно е да го внесете името на вашата компанија!" )
    } else {
        showSucces(company)
    }

    if (telephone.value.trim() === "" || isNaN(telephone.value)) {
        showError(telephone, "Потребно е да го внесете вашиот телефонски број!")
    } else {
        showSucces(telephone)
    }

});

