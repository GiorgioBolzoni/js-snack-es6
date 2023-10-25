// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        name: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: "Juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

for (let squadra of squadre) {
    squadra.puntiFatti = getRndInteger(1, 100);
    squadra.falliSubiti = getRndInteger(1, 70);
}

const squadreNomiFalli = squadre.map(({ name, falliSubiti }) => ({ name, falliSubiti }));
console.log(squadreNomiFalli);