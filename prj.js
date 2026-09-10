const pr = require('prompt-sync')();

function cllg(txt) {
    console.log(txt);
}

function clr() {
    console.clear();
}

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
    cllg('=================================');
    cllg('=== RAILWAY MANAGER =============');
    cllg('=================================');
    
    menuMessage.forEach(elm => {
        cllg(elm);
    });
    
    cllg('\nVotre Choix :');
    
    let choix = parseInt(pr("   >"));
    
    while (
        !Number.isInteger(choix) ||
        choix < 0 ||
        choix >= arryOfFunc.length //khtli h lant les funs
    ) {
        cllg('\nVotre Choix :');
        choix = parseInt(pr("   >"));
    }
    
    return choix;
}

function quitte() {
    clr();
    return;
}

function AvaIDSeats(trajeId, idSeat) {
    this.id = trajeId;
    this.avalTicketIdSeat = [idSeat];
}

function findAvalSeat(idTrajet) {
    const index = avaIDSeats.findIndex(obj => obj.id === idTrajet);
    
    if (
        index === -1 ||
        avaIDSeats[index].avalTicketIdSeat.length === 0
    ) {
        return false;
    } else {
        let id = avaIDSeats[index].avalTicketIdSeat[
            avaIDSeats[index].avalTicketIdSeat.length - 1
        ];
        
        avaIDSeats[index].avalTicketIdSeat.length -= 1;
        
        return id; //win taskoyst 
    }
}

function afficherTrajets() {
    clr();
    
    cllg("=== TRAJETS DISPONIBLES ===");
    
    for (let trj of trips) {
        cllg(`\n#${trj.id} ${trj.departure} → ${trj.destination}
            Départ : ${trj.departureTime}
            Arrivée : ${trj.arrivalTime}
            Prix : ${trj.price} DH
            Places disponibles : ${trj.availableSeats}`);
        }
        
        return main();
    }
    
    function acheterTicket() {
        let passgName = pr('Nom du passager : ');
        let idTrajet = parseInt(pr('Identifiant du trajet : '));
        
        const tripIndex = trips.findIndex(
            trip => trip.id === idTrajet
        );
        
        let isSeat = true; // tin lblays h tran
        let exist = tripIndex !== -1; // is nit ill tran n3d oho
        
        if (
            exist &&
            trips[tripIndex].availableSeats <= 0
        ) {
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
            
            let seatNumber;
            
            let seat = findAvalSeat(tripIndex);
            
            if (seat !== false) {
                seatNumber = seat;
            } else {
                seatNumber = 51 - trips[tripIndex].availableSeats;
            }
            
            trips[tripIndex].availableSeats -= 1;
            
            let price = trips[tripIndex].price;
            
            tickets[tickets.length] = new Tickets(
                id,
                passgName,
                tripIndex,
                seatNumber,
                price
            );
            
            return main(` +tickets ${id} success !!
                \nPassager : ${tickets[tickets.length - 1].passengerName}
                \nTrajet : ${trips[tripIndex].departure} → ${trips[tripIndex].destination}
                \nPlace : ${tickets[tickets.length - 1].seatNumber}
                \nPrix : ${tickets[tickets.length - 1].price} DH
                `);
                
            } else if (isSeat) {
                return main('<<<- Trajet not found ->>>');
            } else {
                return main('-!OH!-No Available Seats');
            }
        }
        
        function Tickets(id, passgName, idTrajet, seatNumber, price) {
            this.id = id;
            this.passengerName = passgName;
            this.tripId = idTrajet;
            this.seatNumber = seatNumber;
            this.price = price;
}

function afficherTickets() {
    clr();
    
    cllg('=== TICKETS ===');
    
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
}

function annulerTicket() {
    let idq = parseInt(pr('Identifiant du ticket : '));

    const index = tickets.findIndex(
        obj => obj.id === idq
    );
    
    if (index > -1) {
        
        // tripId contains the trip array index
        const tripIndex = tickets[index].tripId;
        
        trips[tripIndex].availableSeats += 1;
        
        // Find the correct trip inside avaIDSeats
        const avaIndex = avaIDSeats.findIndex(
            obj => obj.id === tripIndex
        );

        if (avaIndex !== -1) {
            avaIDSeats[avaIndex].avalTicketIdSeat
            .push(tickets[index].seatNumber);
        }

        else {
            
            avaIDSeats[avaIDSeats.length] = new AvaIDSeats(tripIndex, tickets[index].seatNumber);
        }
        
        tickets.splice(index, 1);
        
        return main(
            'Ticket Annuler Avec Successes '
        );
        
    } else {
        
        return main('Ticket Not Found!!!');
    }
}

function rechercherTicket() {
    cllg("====== Recherche =======");
    let name = pr('Nom du passager : ');
    
    let i = 0;
    let message = `${name} has no tickets!!!`;
    
    for (let itm in tickets) {
        // cllg(tickets[itm])
        if (tickets[itm].passengerName === name) {
            let txt = `
            \nTicket #${tickets[i].id}
            \nPassager : ${tickets[i].passengerName}
            \nTrajet : ${trips[tickets[i].tripId].departure} → ${trips[tickets[i].tripId].destination}
            \nPlace : ${tickets[i].seatNumber}
            \nPrix : ${tickets[i].price} DH
            `;
            
            cllg(txt);
            message = "  >Done!!";
        }
        i++;
    }
    
    return main(message);
    
    
}

function filtrerTrajets() {
    cllg('===== Filtrer les trajets =====\n');
    
    let vill = pr('Ville de départ : ');
    let found = 'ville does not have any departure trip';
    for (let itm in trips) {
        if (trips[itm].departure === vill) {
            if (found === 'ville does not have any departure trip') {
                cllg('\n===== Results =====');
            }
            cllg(`${trips[itm].departure} --> ${trips[itm].destination} : ${trips[itm].price}`);
            found = '\nThat is all.';
        }
    }
    return main(found);
}

function trierTrajets() {
    let trajId = [trips[0].id];
    for (let idT = 1; idT < trips[trips.length]; idT++) {
        //

        let i = trajId.length - 1;
        trajId[trajId.length] = trips[idT].id;

        while(i >= 0){
            if (trips[trajId[i]].price > trips[trajId[i + 1]].price) {
                let sw = trajId[i + 1];
                trajId[i + 1] = trajId[i];
                trajId[i] = sw;
            }
            i--;
        }
    }
    cllg(trajId);
    for(let idTrip = 0; idTrip < trajId.length - 1; idTrip++){
    
        cllg(`${trips[trajId[idTrip]].departure} --> ${trips[trajId[idTrip]].destination} : ${trips[trajId[idTrip]].price}`);


    }

    return main();
}

function main(messag) {
    if (messag) {
        cllg(messag);
    }

    let choix = affichMenu();

    arryOfFunc[choix]();
}

main();