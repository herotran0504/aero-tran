const bcrypt = require("bcrypt");
const Const = require("./util/Const");

// FLIGHTS
const initialData = {
    "id": "616939",
    "flightNumber": "A350",
    "departureCity": "Cali",
    "arrivalCity": "Houston",
    "departureDate": "11/17/2023",
    "departureTime": "12:12:12",
    "arrivalDate": "11/17/2023",
    "arrivalTime": "15:15:15",
    "duration": "3:00",
    "aircraftType": "A350",
    "ecoSeats": "200",
    "availableEcoSeats": "200",
    "businessSeats": "20",
    "availableBSeats": "20",
    "businessPrice": "1000",
    "ecoPrice": "350",
    "isDomestic": "1"
};

const americanCities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Columbus",
    "Fort Worth",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "Nashville",
    "Baltimore",
    "Oklahoma City",
    "Louisville",
    "Portland",
    "Las Vegas",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Kansas City",
    "Long Beach",
    "Mesa",
    "Atlanta",
    "Colorado Springs",
    "Virginia Beach",
    "Raleigh",
    "Omaha",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Wichita",
    "New Orleans",
];

const flights = [];

for (let i = 0; i < 30; i++) {
    const flight = {...initialData};
    flight.id = (parseInt(initialData.id) + i + 1).toString();
    flight.flightNumber = `A350-${i + 1}`;
    flight.departureCity = americanCities[Math.floor(Math.random() * americanCities.length)];
    flight.arrivalCity = americanCities[Math.floor(Math.random() * americanCities.length)];
    flight.departureDate = "11/" + (i + 1) + "/2023";
    flight.arrivalDate = "11/" + (i + 1) + "/2023";
    flight.departureTime = `0${i + 1}:0${i + 1}:0${i + 1}`;
    flight.arrivalTime = `1${i + 1}:1${i + 1}:1${i + 1}`;
    flight.businessPrice = (parseInt(initialData.businessPrice) + (i + 1) * 100).toString();
    flight.ecoPrice = (parseInt(initialData.ecoPrice) + (i + 1) * 50).toString();
    flight.isDomestic = ((i + 1) % 2).toString();
    flights.push(flight);
}

// console.log(flights);

// USERS
const initialUserData = {
    "id": 10101,
    "username": "user101",
    "password": "password101",
    "email": "user101@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "dob": "1990-05-15",
    "address": "123 Main St, City, Country"
};

const arrayOfUsers = [];
const names = ["John Doe", "Jane Smith", "Michael Johnson", "Emily Williams", "Chris Brown", "Olivia Davis", "Daniel Garcia", "Sophia Martinez", "David Anderson", "Ava Taylor"];

async function generateUsers() {

    for (let i = 0; i < 20; i++) {
        const newUser = {...initialUserData};
        newUser.id = initialUserData.id + i + 1;
        newUser.username = `user${newUser.id}`;
        newUser.password = await bcrypt.hash('123456', Const.CRYPT_SALT);
        newUser.email = `user${newUser.id}@mail.com`;

        const randomIndex = Math.floor(Math.random() * names.length);
        let name = names[randomIndex].split(" ");
        newUser.firstName = name[0];
        newUser.lastName = name[1];

        const year = Math.floor(Math.random() * (2010 - 1970 + 1)) + 1970;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1; // Limiting days to avoid date errors
        newUser.dob = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

        await (newUser.address = `123 Main St, ${americanCities[i]}, USA`);
        arrayOfUsers.push(newUser);
    }
}

generateUsers().then(()=>console.log(arrayOfUsers));