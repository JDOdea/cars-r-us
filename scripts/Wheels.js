import { getWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    let html = "<ul>"

    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}