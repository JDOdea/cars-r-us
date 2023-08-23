import { getPaints, setPaint } from "./database.js";

const paints = await getPaints()

document.addEventListener(
    "change",
    (e) => {
        if(e.target.id === "paint") {     
            setPaint(parseInt(e.target.value))
        }
    }
)

export const Paints = () => {
    return `<h2>Paints</h2>
        <select id="paint">
            <option value="0">Select paint</option>
            ${
                paints.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.color}</option>`
                    }
                ).join("")
            }
        </select>
        `
}