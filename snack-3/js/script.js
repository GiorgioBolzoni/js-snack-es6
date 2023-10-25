// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

"use strict";

const biciclette = [
    {
        name: "Bike-1",
        peso: 9,
    },
    {
        name: "Bike-2",
        peso: 7,
    },
    {
        name: "Bike-3",
        peso: 12,
    },
    {
        name: "Bike-4",
        peso: 15,
    },
    {
        name: "Bike-5",
        peso: 10,
    },
];

let biciLeggera = biciclette[0];

for (let i = 0; i < biciclette.length - 1; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}

console.log(`La bici più leggera è ${biciLeggera.name} , con un peso di ${biciLeggera.peso} kg.`);