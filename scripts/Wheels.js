import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (e) => {
        if(e.target.id === "paint") {     
            setWheels(parseInt(e.target.value))
        }
    }
)

export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheels">
            <option value="0">Select wheels</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.name}</option>`
                    }
                ).join("")
            }
        </select>
        `
}