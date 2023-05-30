import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from "./database.js";

const wheels = getWheels()
const technologies = getTechnologies()
const paints = getPaints()
const interiors = getInteriors()



const buildOrderListItem = (order) => {

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    let totalCost = foundWheels.price

    const foundTechnologies = technologies.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    totalCost += foundTechnologies.price

    const foundPaints = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    totalCost += foundPaints.price

    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInteriors.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
        </li>`
}



export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}