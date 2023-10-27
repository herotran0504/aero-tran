import { FlightController } from "./controller/flightController.js";
const controller = FlightController.create();

window.onload = async function () {
    addEventListeners();
}
const doc = document;

async function addEventListeners() {
    const searchBtn = doc.getElementById('btnsearchFlight');
    const searchForm = doc.getElementById('searchFlight');
    // submit event
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        searchBtn.disable = true;
        let fromCity = doc.getElementById('flightFrom').value;
        let toCity = doc.getElementById('flightTo').value;
        let fromDay = doc.getElementById('fromDay').value
        let toDay = doc.getElementById('toDay').value
        controller.searchFlight(fromCity, toCity, formatInputDate(fromDay), formatInputDate(toDay)).then(() => {
            searchBtn.disabled = false;
            searchForm.reset();
        });
    })
}

function formatInputDate(inputDate) {
    // Split the input date into year, month, and day parts
  const [year, month, day] = inputDate.split('-');

  // Assemble the formatted date
  return `${month}/${day}/${year}`;

}