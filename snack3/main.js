'use strict'

const numberArray = []

for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * 20)
    numberArray.push(num)
}

console.log(numberArray)
const newArray = getElementByIndex(numberArray, 0, 3);
console.log(newArray)

function getElementByIndex(array, fromNum, toNum) {

    const newArray = array.filter((element, index, array) => {
        if (index >= fromNum && index <= toNum) {
            return array[index]
        }
    })
    console.log(newArray)
}