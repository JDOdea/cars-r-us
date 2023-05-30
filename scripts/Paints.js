import { getPaints } from "./database.js";

const paints = getPaints()

export const Paints = () => {
    let html = "<ul>"

    const listItems = paints.map(paint => {
        return `<li>
            <input type="radio" name="paint" value="${paint.id}" /> ${paint.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}