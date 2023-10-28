# AeroTran - Flight Booking System

AeroTran is a flight booking system that allows users to search, book, and manage flights. This project is built using Node.js, Express.js, and MongoDB for the backend, and HTML, CSS, and JavaScript for the frontend.

## Features
- **User Registration and Login**: Users can create accounts and securely log in.
- **Flight Search**: Users can search for available flights based on destination, date, and class.
- **User Profiles**: Users can manage their personal information and preferences.
- **Flight Details**: Detailed flight information, including layovers, duration, and aircraft type.
- **Flight Filters**: Users can refine search results by price, airline, or departure time.
- **Flight Booking**: Users can book flights and receive booking confirmations.
- **Booking History**: Users can view their booking history.
- **Cancel/Modify Booking**: Users can cancel or modify their bookings with certain conditions and rules.

## Tech Stack
- **Backend**: Node.js, Express.js, RESTful APIs, Clean Architecture
- **Frontend**: HTML, CSS, JavaScript, Bootstrap, JQuery
- **Database**: MongoDB

## Backend Components
- **Model**: Defines the data structure and entities used in the application, including User, Flight, Booking... .
- **Router**: Manages the API routes and endpoints, handling incoming requests and directing them to the appropriate controller.
- **Controller**: Implements the business logic  based on the incoming requests.
- **Repository**: Acts as an intermediary between the controller and the database, responsible for querying and manipulating data.
- **DAO (Data Access Object)**: Provides a data access layer for interacting with the database, abstracting away database-specific details and queries.
- **Database**: Stores and manages the application's data, including user information, flight details, booking records, and more. MongoDB is used as the database for AeroTran.

## Frontend Components
- **Images**: Stores images used in the user interface, such as logos, icons, and background images.
- **Pages**: Defines the different html pages of the application that users can navigate through, like the homepage, flight search, booking, and user profile pages.
- **Scripts**: Contains JavaScript files that provide interactivity and functionality to the frontend, including handling user input.
- **Styles**: Define the visual design and layout of the application.
- **View**: Represents the HTML templates and structure of each page, integrating with styles and scripts to create a cohesive user experience.
- **Controller**: Manages the frontend's logic and user interactions, orchestrating actions like form submissions, validation, and navigation between pages.
- **Repository**: Acts as a bridge between the frontend and the backend, facilitating communication with the server to retrieve and send data, such as flight details and user information.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/AeroTran.git
   cd AeroTran
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your MongoDB connection string in the configuration file.

4. Start the server:
   ```bash
   npm start
   ```

5. Access the application at `http://localhost:3000` in your web browser.

## Database Structure
- The MongoDB database is structured with collections for Users, Flights, Bookings, and Airlines.

## Usage
- Create an account or log in to start booking flights.
- Search for flights by specifying destination, date, and class.
- Select a flight, confirm your booking, and receive a booking confirmation.
- Manage your bookings and view your booking history in your profile.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
