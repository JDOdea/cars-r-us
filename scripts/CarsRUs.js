import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"


export const CarsRUs = () => {
    return `
    <h1>Cars-R-Us: Personal Car Builder</h1>

    <article class="choices">
        <section class="choices_wheels options">
            <h2>Wheels</h2>
            ${Wheels()}
        </section>
        <section class="choices_technologies options">
            <h2>Technologies</h2>
            ${Technologies()}
        </section>
        <section class="choices_paints options">
            <h2>Paints</h2>
            ${Paints()}
        </section>
        <section class="choices_interiors options">
            <h2>Interiors</h2>
            ${Interiors()}
        </section>

    `
}