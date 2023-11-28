'use strict'

const squadreCalcio = [
    {
        nome: 'Juventus',
        puntiFatti: randomNumber(),
        falliSubiti: randomNumber(),
    },
    {
        nome: 'Calcio Catania',
        puntiFatti: randomNumber(),
        falliSubiti: randomNumber(),
    },
    {
        nome: 'Napoli',
        puntiFatti: randomNumber(),
        falliSubiti: randomNumber(),
    },
    {
        nome: 'Roma',
        puntiFatti: randomNumber(),
        falliSubiti: randomNumber(),
    },
    {
        nome: 'Milan',
        puntiFatti: randomNumber(),
        falliSubiti: randomNumber(),
    },
]

function randomNumber(num) {
    num = Math.floor(Math.random() * 10);
    return num
}

squadreCalcio.forEach(element => {
    const { nome, falliSubiti } = element;
    console.log(`Nome: ${nome}, Falli subiti: ${falliSubiti}`)
})