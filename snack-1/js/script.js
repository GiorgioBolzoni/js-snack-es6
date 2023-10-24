const tableName = "Tavolo Vip";
const invitedGuests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// Creiamo la lista dei segnaposto
const placeCards = invitedGuests.map((guest, index) => {
    return {
        tableName: tableName,
        guestName: guest,
        place: index + 1
    };
});
// console.log(placeCards)

