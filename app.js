/*const form = document.querySelectorAll('.form-quizz .question-block');
console.log(form)*/
const form = document.querySelector('.form-quizz');
let tableauResultas = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultas.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    console.log(tableauResultas);
    tableauResultas = [];

})


