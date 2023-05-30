import { getInteriors } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    let html = "<ul>"

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}