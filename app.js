let secretNumber = 0;
let trys = 0;
let listOfNumbers = [];
let maximumNumber = 10;

function assignTextElement(element, text){
    let elementHTML = document.querySelector(element); 
    elementHTML.innerHTML = text; 
    return;
}

function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userValue').value);

if (userNumber  === secretNumber) {
    assignTextElement('p',`You go this in ${trys} ${(trys === 1) ? 'try' : 'trys'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //The user did not get correctly
    if (userNumber > secretNumber){
        assignTextElement('p','The number is lower');
    } else {
        assignTextElement('p','The number is higher');
    }
    trys++;
    clearBox();
    }
    return;
}

function clearBox() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maximumNumber)+1;

    if (listOfNumbers.length == maximumNumber) {
        assignTextElement('p','All random numbers have been used');
    } else {

    }

    if (listOfNumbers.includes(generatedNumber)) {
        return listOfNumbers();
    } else {
        listOfNumbers.push(generatedNumber);
        return generatedNumber;
    }
}

function welcomeMessages() {
    assignTextElement('h1' , 'Secret Number game');
    assignTextElement('p' , `Please enter a number between 1 and ${maximumNumber}`);
    secretNumber = generateSecretNumber();
    trys = 1;
}


function restartGame() {
    clearBox(); 
    welcomeMessages();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

welcomeMessages();