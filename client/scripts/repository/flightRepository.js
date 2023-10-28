const URL = "http://localhost:5001";
export class FlightRepository {
  async searchFlight(fromCity, toCity, fromDate, toDate) {
    const url = `${URL}/flights/search?departureCity=${fromCity}&arrivalCity=${toCity}&fromDate=${fromDate}&toDate=${toDate}`;
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };
    console.log(url);
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