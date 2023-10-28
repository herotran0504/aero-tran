const URL = "http://localhost:5001";
export class FlightRepository {
  async searchFlight(fromCity, toCity, departure, arival) {
    const url = `${URL}/flights/search?departureCity=${fromCity}&arrivalCity=${toCity}&departureDate=${departure}&arivalDate=${arival}`;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return result
    } else {
      throw new Error(`Search flight failed with status ${response.status}`);
    }
  }

  async searchAllFlights() {
    const url = `${URL}/flights/`;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return result
    } else {
      throw new Error(`Search flight failed with status ${response.status}`);
    }
  }
}