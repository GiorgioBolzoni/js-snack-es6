"use strict";

const studenti = [
    {
        ID: "213",
        name: "Marco della Rovere",
        grades: "78",
    },
    {
        ID: "110",
        name: "Paola Cortellessa",
        grades: "96",
    },
    {
        ID: "250",
        name: "Andrea Mantegna",
        grades: "48",
    },
    {
        ID: "145",
        name: "Gaia Borromini",
        grades: "74",
    },
    {
        ID: "196",
        name: "Luigi Grimaldello",
        grades: "68",
    },
    {
        ID: "102",
        name: "Piero della Francesca",
        grades: "50",
    },
    {
        ID: "120",
        name: "Francesca da Polenta",
        grades: "84",
    },
];
// console.log(studenti)

// Nomi in maiuscolo

const nameUppercase = studenti.map(studenti => {
    return studenti.name.toUpperCase();
});

console.log(nameUppercase)