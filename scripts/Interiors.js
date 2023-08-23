import { getInteriors, setInterior } from "./database.js";

const interiors = await getInteriors()

document.addEventListener(
    "change",
    (e) => {
        if(e.target.id === "interior") {     
            setInterior(parseInt(e.target.value))
        }
    }
)

export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select interior</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.material}</option>`
                    }
                ).join("")
            }
        </select>
        `
}