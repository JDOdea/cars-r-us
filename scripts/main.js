import { CarsRUs } from "./CarsRUs.js";

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await CarsRUs()
}

renderAllHTML()

document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})