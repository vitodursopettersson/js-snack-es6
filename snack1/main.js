'use strict'

const raceBike = [
    {
        name: 'Canyon Ultimate CF Slx 9.0',
        weight: 6,
        photo: 'canyon.jpg',
    },
    {
        name: 'Rose X-Lite Six Disc',
        weight: 6,
        photo: 'rose.jpg',
    },
    {
        name: 'Sarto asola',
        weight: 5,
        photo: 'sarto.jpg',
    },
    {
        name: 'Bianchi Specialissima',
        weight: 7,
        photo: 'bianchi.jpg',
    },
    {
        name: 'Scott Addict RC Premium Disc',
        weight: 6,
        photo: 'scott.jpg',
    },
]

let minWeight = Infinity;
for (let i = 0; i < raceBike.length; i++) {
    const bikeItem = raceBike[i];

    if (bikeItem.weight <= minWeight) {
        minWeight = bikeItem.weight;
    }
}

const printBike = document.getElementById('bike');
printBike.innerHTML = minWeight