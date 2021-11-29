/*const form = document.querySelectorAll('.form-quizz .question-block');
console.log(form)*/
const form = document.querySelector('.form-quizz');
let tableauResultas = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector('.resultats h2');
const textResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultas.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    //console.log(tableauResultas);
    verifFunc(tableauResultas)
    tableauResultas = [];
})

function verifFunc(tableauResultas) {

    for(let a = 0; a < 5; a++) {

        if(tableauResultas[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }
    }

    console.log(verifTableau);
    verifTableau = [];

}


