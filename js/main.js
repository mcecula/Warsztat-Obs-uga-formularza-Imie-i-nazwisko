console.log('Warsztat - Obsługa formularza "Imie i nazwisko"')


const submitForm = (event) => {
    event.preventDefault();
    let fName = document.querySelector('[name="fname"]');
    let lName = document.querySelector('[name="lname"]');
    console.log(`Imie: ${fName.value}, Nazwisko: ${lName.value}`);
}

let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

//console.log(form);