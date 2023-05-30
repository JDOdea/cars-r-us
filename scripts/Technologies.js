import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (e) => {
        if(e.target.id === "tech") {     
            setTechnology(parseInt(e.target.value))
        }
    }
)

export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${
                technologies.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.name}</option>`
                    }
                ).join("")
            }
        </select>
        `
}