"use strict";

const students = [
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
// console.log(students)

// Nomi in maiuscolo

const nameUppercase = students.map(student => {
    return student.name.toUpperCase();
});

console.log(nameUppercase)

const studentsOver70 = students.filter(student => {
    return student.grades > 70;
})
console.log(studentsOver70)

const studentsOver70andIdOver120 = students.filter(student => {
    return student.grades > 70 && student.ID > 120;
})
console.log(studentsOver70)