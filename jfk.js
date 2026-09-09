const pr = require('prompt-sync')()

function cllg(txt) {
    console.log(txt)
}
function clr() {
    console.clear();
};

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];
let avaIDSeats = [];

const menuMessage = [
    "1- Afficher les trajets",
    "2- Acheter un ticket",
    "3- Afficher les tickets",
    "4- Annuler un ticket",
    "5- Rechercher un ticket",
    "6- Filtrer les trajets",
    "7- Trier les trajets",
    "0- Quitter"
];

function rechercherTicket() { };
function filtrerTrajets() { };
function trierTrajets() { };

const arryOfFunc = [
    quitte,
    afficherTrajets,
    acheterTicket,
    afficherTickets,
    annulerTicket,
    rechercherTicket,
    filtrerTrajets,
    trierTrajets
];

function affichMenu() {

    cllg('=================================\n=== RAILWAY MANAGER =============\n=================================')

    menuMessage.forEach(elm => {
        cllg(elm)
    });

    cllg('\nVotre Choix :')
    let choix = parseInt(pr("   >"));

    while (arryOfFunc.length < choix || choix < 0) {
        cllg('\nVotre Choix :')
        choix = parseInt(pr("   >"));
    }
    return choix;

}

function quitte() {
    clr();
    return;

};

// {
// id: 1,
// departure: "Safi",
// destination: "Youssoufia",
// departureTime: "07:30",
// arrivalTime: "08:30",
// price: 25,
// availableSeats: 50
// },

function AvaIDSeats(trajeId, idSeat) {
    this.id = trajeId;
    this.avalTicketIdSeat = [idSeat];
}

function findAvalSeat(idTrajet) {
    const index = avaIDSeats.findIndex(obj => obj.id === idTrajet);
    cllg(avaIDSeats[index]);
    if (!avaIDSeats[index] ||
        avaIDSeats[index].avalTicketIdSeat.length === 0) {
        return false;
    } else {
        let id = avaIDSeats[index].avalTicketIdSeat[avaIDSeats[index].avalTicketIdSeat.length - 1];
        avaIDSeats[index].avalTicketIdSeat.length -= 1;
        return id;
    }
}

function afficherTrajets() {
    cllg("=== TRAJETS DISPONIBLES ===")
    for (let trj of trips) {
        cllg(`\n#${trj.id} ${trj.departure} → ${trj.destination}
            Départ : ${trj.departureTime}
            Arrivée : ${trj.arrivalTime}
            Prix : ${trj.price} DH
            Places disponibles : ${trj.availableSeats}`)
    }
    return main();
};

function acheterTicket() {
    let passgName = pr('Nom du passager : ');
    let idTrajet = parseInt(pr('Identifiant du trajet : '));
    const tripIndex = trips.findIndex(trip => trip.id === idTrajet);

    let isSeat = true;
    let exist = false;
    for (let trj of trips) {
        if (trj.id === idTrajet) {
            exist = true;
            break;
        }
    }
    if (exist && parseInt(trips[tripIndex].availableSeats) <= 0) {
        exist = false;
        isSeat = false;
    }
    if (exist) {
        let id;
        if (tickets.length === 0) {
            id = 1;
        } else {
            id = parseInt(tickets[tickets.length - 1].id) + 1;
        }
        let seatNumber; //= 51 - trips[tripIndex].availableSeats;
        
        let seat = findAvalSeat(idTrajet);
        if (seat) {
            seatNumber = seat;
        } else {
            // seatNumber = parseInt(tickets[tickets.length - 1].seatNumber) + 1;
            seatNumber = 51 - trips[tripIndex].availableSeats;
        }



        trips[tripIndex].availableSeats -= 1;
        let price = trips[tripIndex].price;

        tickets[tickets.length] = new Tickets(id, passgName, tripIndex, seatNumber, price);
        return main(` +tickets ${id} success !!\nPassager : ${tickets[tickets.length - 1].passengerName}
            Trajet : ${trips[tripIndex].departure} → ${trips[tripIndex].destination}
            Place : ${tickets[tickets.length - 1].seatNumber}
            Prix : ${tickets[tickets.length - 1].price} DH
            `);
    } else if (isSeat) {
        return main('<<<- Trajet not found ->>>');
    } else {
        return main('-!OH!-No Available Seats')
    }

};
// Tickets(id, passgName, idTrajet, seatNumber, price)
function Tickets(id, passgName, idTrajet, seatNumber, price) {
    this.id = id;
    this.passengerName = passgName;
    this.tripId = idTrajet;
    this.seatNumber = seatNumber;
    this.price = price;
}

// Ticket #2
// Passager : Sara
// Trajet : Safi → Youssoufia
// Place : 1
// Prix : 25 DH
function afficherTickets() {
    clr();
    cllg('=== TICKETS ===')
    if (tickets.length === 0) {
        return main('*** Aucun ticket enregistré ***\n');
    } else {
        tickets.forEach(ele => {
            let txt = `
            \nTicket #${ele.id}
            \nPassager : ${ele.passengerName}
            \nTrajet : ${trips[ele.tripId].departure} → ${trips[ele.tripId].destination}
            \nPlace : ${ele.seatNumber}
            \nPrix : ${ele.price} DH
            `;
            cllg(txt);
        });
    }
    return main();

};

function annulerTicket() {
    let idq = parseInt(pr('Identifiant du ticket : '));
    const index = tickets.findIndex(obj => obj.id === idq);

    if (index > -1) {
        trips[tickets[index].tripId].availableSeats += 1;

        if (avaIDSeats[index]) {
            avaIDSeats[index].avalTicketIdSeat.push(tickets[index].seatNumber);
        } else {
            avaIDSeats[avaIDSeats.length] = new AvaIDSeats(index, tickets[index].seatNumber);
            // cllg(avaIDSeats);
        }

        cllg(avaIDSeats);
        

        if (index > -1) {
            tickets.splice(index, 1);
        }

        return main('Ticket Annuler Avec Successes ')
    } else {
        return main('Ticket Not Found!!!')
    }

};

function main(messag) {
    if (messag) cllg(messag);
    let choix = affichMenu();
    cllg(choix);
    arryOfFunc[choix]();
}

main();