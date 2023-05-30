import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (e) => {
        const itemClicked = e.target

        if (itemClicked.id.startsWith("orderButton")) {
            addCustomOrder()
        }
    }
)


export const CarsRUs = () => {
    return `
    <h1>Cars-R-Us: Personal Car Builder</h1>

    <article class="choices">
        <section class="choices_wheels options">
            ${Wheels()}
        </section>
        <section class="choices_technologies options">
            ${Technologies()}
        </section>
        <section class="choices_paints options">
            ${Paints()}
        </section>
        <section class="choices_interiors options">
            ${Interiors()}
        </section>
    </article>

    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>
    `
}